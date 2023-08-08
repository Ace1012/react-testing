import axios from "axios";
import { QueryFunctionContext, useQuery } from "react-query";

interface IParallelQueriesProps { }

const fetchSuperHeroes = ({ }: QueryFunctionContext) => {
    return axios.get(`http://localhost:4000/superheroes`)
}

const fetchFriends = ({ }: QueryFunctionContext) => {
    return axios.get(`http://localhost:4000/friends`)
}

const ParallelQueries = ({ }: IParallelQueriesProps) => {
    const { data: superheroes } = useQuery({
        queryKey: "super-heroes",
        queryFn: fetchSuperHeroes
    })

    const { data: friends } = useQuery({
        queryKey: "super-friends",
        queryFn: fetchFriends
    })

    return (
        <div>Parallel Queries</div>
    )
}
export default ParallelQueries;