import { render, screen } from '@testing-library/react';
import { describe, expect, test } from "vitest"
import { act } from 'react-dom/test-utils';
import { Counter } from '../components';

describe("Elements render", async () => {
    test("Counter elements render", () => {
        render(<Counter />)
        const countDisplay = screen.getByText(/^count is \d$/i);
        const incrementBtn = screen.getByRole<HTMLButtonElement>("button", {
            name: "+"
        })
        const decrementBtn = screen.getByRole<HTMLButtonElement>("button", {
            name: "-"
        })
        expect(countDisplay).toBeInTheDocument();
        expect(incrementBtn).toBeInTheDocument();
        expect(decrementBtn).toBeInTheDocument();
    })

    test("Count changes on button press", () => {
        render(<Counter />)
        const countDisplay = screen.getByText(/^count is \d$/i);
        const incrementBtn = screen.getByRole<HTMLButtonElement>("button", {
            name: "+"
        })
        const decrementBtn = screen.getByRole<HTMLButtonElement>("button", {
            name: "-"
        })

        expect(countDisplay).toHaveTextContent(/count is 0/i)

        act(() => incrementBtn.click());
        expect(countDisplay).toHaveTextContent(/count is 1/i);

        act(() => decrementBtn.click())
        expect(countDisplay).toHaveTextContent(/count is 0/i);
    })
})