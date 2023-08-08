import { useParams } from "react-router-dom";
import { useSuperHeroData } from "./hooks/useSuperHeroData";

interface IRQSuperHeroProps { }

const RQSuperHero = ({ }: IRQSuperHeroProps) => {
    const { heroId } = useParams();
    const { data, isLoading, isError, error } = useSuperHeroData(heroId ?? "1")

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{(error as { message: string }).message}</h2>
    }

    return (
        <div>{data?.data.name} - {data?.data.alterEgo}</div>
    )
}
export default RQSuperHero;