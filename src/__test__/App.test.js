import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
}));

describe('boundary', () => {
    test('AppComponent boundary renders without crashing', () => {
        render(<App />);
    });

    test('AppComponent boundary has "Quiz Game" h1', () => {
        render(<App />);
        expect(screen.queryByText('Quiz Game')).toBeInTheDocument();
    });

    test('AppComponent boundary has "Please attempt all questions" h2', () => {
        render(<App />);
        expect(screen.queryByText('Please attempt all questions')).toBeInTheDocument();
    });

    test('AppComponent boundary has Quiz component', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Quiz Game' })).toBeInTheDocument();
    });

    test('AppComponent boundary has QuizManager component', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Manage questions' })).toBeInTheDocument();
    });
});
