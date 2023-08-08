import axios from "axios";
import { QueryFunctionContext, useQueries } from "react-query";

interface IDynamicParallelProps {
    heroIds: number[]
}

const fetchSuperhero = ({ queryKey }: QueryFunctionContext) => {
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const DynamicParallel = ({ heroIds }: IDynamicParallelProps) => {
    const queryResults = useQueries(
        heroIds.map(id => ({
            queryKey: ["super-hero", id],
            queryFn: fetchSuperhero
        }))
    )

    console.log({ queryResults })

    return (
        <div>DynamicParallel</div>
    )
}
export default DynamicParallel;