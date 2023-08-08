import { describe, test, vi } from "vitest";
import { createMockedUseFetch } from "../utilities/mockedHooks";
import { waitFor } from "@testing-library/react";

import { IUser } from "../components/users";
import { mockedUseFetchResult, mockedUsers } from "../constants/constants";
import useFetch from "../hooks/useFetch";

vi.mock("../hooks/useFetch");

const mockedFetch = vi.fn().mockResolvedValue(mockedUsers)
const mockedUseFetch = createMockedUseFetch<IUser[]>()

describe("Runs properly", () => {
    test("Returns values correctly", async () => {
        mockedUseFetch.mockReturnValueOnce({ ...mockedUseFetchResult });
        const { data: users, isLoading, error } = await waitFor(() => useFetch<IUser[]>(""));
        expect(users[0]).toBe(mockedUseFetchResult.data[0])
    })
})

describe("Fetch runs", () => {
    beforeAll(() => {
        global.fetch = mockedFetch;
    })

    test("Fetch is called", async () => {
        mockedUseFetch.mockImplementation(() => {
            fetch("");
            return mockedUseFetchResult
        })
        const result = await waitFor(() => useFetch<IUser[]>(""));

        expect(fetch).toHaveBeenCalledTimes(1)
    })
})