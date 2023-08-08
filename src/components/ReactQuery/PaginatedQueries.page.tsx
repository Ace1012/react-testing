import axios from "axios";
import { QueryFunctionContext, useQuery } from "react-query";
import { useState } from "react";
import { IColor } from "./interfaces";

interface IPaginatedQueriesProps { }

const fetchColors = ({ queryKey }: QueryFunctionContext) => {
    const pageNumber = queryKey[1] as string;
    return axios.get<IColor[]>(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueries = ({ }: IPaginatedQueriesProps) => {
    const [pageNumber, setPageNumber] = useState(1);
    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ["colors", pageNumber],
        queryFn: fetchColors,
        keepPreviousData: true
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{(error as { message: string }).message}</h2>
    }

    return (
        <>
            <div>PaginatedQueries</div>
            <div style={{
                display: "flex",
                gap: 16
            }}>
                <button
                    disabled={pageNumber === 1}
                    onClick={() => setPageNumber(prev => prev - 1)}>
                    Prev Page
                </button>
                <button
                    disabled={pageNumber === 4}
                    onClick={() => setPageNumber(prev => prev + 1)}>
                    Next Page
                </button>
            </div>
            <div>
                {
                    data?.data.map((color) => (
                        <div key={color.id}>
                            <h2>{color.label}</h2>
                        </div>
                    ))
                }
            </div>
            {isFetching && <span style={{
                position: "absolute",
                top: 16,
                right: 16
            }}>Loading...</span>}
        </>
    )
}
export default PaginatedQueries;