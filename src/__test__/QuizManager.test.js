import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuizManager from '../components/QuizManager';

const questions = [
    {
        id: 1,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 'Paris',
    },
    {
        id: 2,
        question: 'What is the largest planet in our solar system?',
        options: ['Mars', 'Jupiter', 'Earth', 'Saturn'],
        correctAnswer: 'Jupiter',
    },
];

const setQuestions = jest.fn();

describe('boundary', () => {
    test('QuizManagerComponent boundary should render questions', () => {
        render(<QuizManager questions={questions} setQuestions={setQuestions} />);
        expect(screen.getByText('Quiz Manager')).toBeInTheDocument();
    });

    test('QuizManagerComponent boundary should have Add Question button', () => {
        render(<QuizManager questions={questions} setQuestions={setQuestions} />);
        expect(screen.getByRole('button', { name: 'Add Question' })).toBeInTheDocument();
    });

    test('QuizManagerComponent boundary should not initially show the question form', () => {
        render(<QuizManager questions={questions} setQuestions={setQuestions} />);
        expect(screen.queryByLabelText('Question:')).toBeNull();
    });

    test('QuizManagerComponent boundary should show the question form after clicking Add Question button', () => {
        render(<QuizManager questions={questions} setQuestions={setQuestions} />);
        const addQuestionButton = screen.getByRole('button', { name: 'Add Question' });
        fireEvent.click(addQuestionButton);
        expect(screen.getByLabelText('Question:')).toBeInTheDocument();
    });

    test('QuizManagerComponent boundary should calls setQuestions when Save Question button is clicked', () => {
        render(<QuizManager questions={questions} setQuestions={setQuestions} />);
        const SaveQuestionButton = screen.getByRole('button', { name: 'Add Question' });
        fireEvent.click(SaveQuestionButton);
        const questionInput = screen.getByLabelText('Question:');
        fireEvent.change(questionInput, { target: { value: 'Sample Question' } });
        const SaveQuestionSubmitButton = screen.getByRole('button', { name: 'Save Question' });
        fireEvent.click(SaveQuestionSubmitButton);
        expect(setQuestions).toHaveBeenCalledTimes(1);
    });
});
