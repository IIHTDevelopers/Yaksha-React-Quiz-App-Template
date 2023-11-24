import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quiz from '../components/Quiz';

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

describe('boundary', () => {
    test('QuizComponentComponent boundary should renders Quiz component', () => {
        render(<Quiz questions={questions} />);
        expect(screen.getByText('Question 1')).toBeInTheDocument();
    });

    test('QuizComponentComponent boundary should renders the first question', () => {
        render(<Quiz questions={questions} />);
        expect(screen.getByText('What is the capital of France?')).toBeInTheDocument();
    });

    test('QuizComponentComponent boundary should renders the result after attempting all questions', () => {
        render(<Quiz questions={questions} />);
        fireEvent.click(screen.getByText('Paris'));
        fireEvent.click(screen.getByText('Jupiter'));
        expect(screen.getByText('Your score: 2 out of 2')).toBeInTheDocument();
    });
});
