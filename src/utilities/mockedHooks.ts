import { MockedFunction } from "vitest";
import useFetch from "../hooks/useFetch";


/**
 * Mock useFetch hook with specific data return type
 * @returns Mocked typed useFetch hook
 */
export const createMockedUseFetch = <T>() =>
  useFetch as MockedFunction<typeof useFetch<T>>;
