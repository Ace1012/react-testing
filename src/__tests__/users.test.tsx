import { render, screen } from '@testing-library/react';
import { mockedErrorUseFetchResult, mockedLoadingUseFetchResult, mockedUseFetchResult } from '../constants/constants';
import { createMockedUseFetch } from '../utilities';
import { describe, expect, test, vi } from "vitest";
import { Users } from '../components';
import { IUser } from '../components/users';
import useFetch from '../hooks/useFetch';

import { setupServer } from 'msw/node'

vi.mock("../hooks/useFetch")

const mockedUseFetch = createMockedUseFetch<IUser[]>();

describe('Users successful fetch', () => {
    beforeAll(() => {
        mockedUseFetch.mockReturnValue(mockedUseFetchResult);
    })
    test("Renders users", async () => {
        render(<Users />);

        expect(useFetch).toHaveBeenCalled()
        expect(useFetch).toHaveBeenCalledTimes(1)


        const users = await screen.findAllByRole("contentinfo");
        expect(users.length).toBeGreaterThan(0);
        expect(users.length).toBe(mockedUseFetchResult.data.length)
    })
})

describe("Users pending/unsuccessful fetch", () => {
    test("Loading... appears", () => {
        mockedUseFetch.mockReturnValue(mockedLoadingUseFetchResult);
        render(<Users />);

        const loading = screen.getByRole("progressbar")

        expect(loading).toBeInTheDocument();
    })

    test("Error occured", async () => {
        mockedUseFetch.mockReturnValue(mockedErrorUseFetchResult);
        render(<Users />);

        const error = screen.queryByText(/error/i);
        screen.debug()

        expect(error).toBeInTheDocument()
    })
})