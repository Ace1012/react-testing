import axios from "axios";
import { QueryFunctionContext, useQuery, useInfiniteQuery } from "react-query"
import { IColor } from "./interfaces";
import { Fragment } from "react";

interface IInfiniteQueriesProps { }

const fetchColors = ({ pageParam = 1 }: QueryFunctionContext) => {
    return axios.get<IColor[]>(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

const InfiniteQueries = ({ }: IInfiniteQueriesProps) => {
    const { data, isLoading, isError, error, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ["colors"],
        queryFn: fetchColors,
        keepPreviousData: true,
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1
            } else {
                return undefined;
            }
        }
    })

    function handleLoadMore() {
        fetchNextPage()
    }

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{(error as { message: string }).message}</h2>
    }

    return (
        <>
            <div>Infinite Queries</div>
            <div>
                {
                    data?.pages.map((group, index) => (
                        <Fragment key={index}>
                            {group.data.map(color => (
                                <div key={color.id}>
                                    <h2>{color.label}</h2>
                                </div>
                            ))}
                        </Fragment>
                    ))
                }
            </div>
            <button
                disabled={!hasNextPage}
                onClick={handleLoadMore}
            >
                Load More
            </button>
            {isFetching && !isFetchingNextPage && <span>Loading...</span>}
        </>
    )
}
export default InfiniteQueries;