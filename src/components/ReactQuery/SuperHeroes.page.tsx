import axios from "axios";
import { useEffect, useState } from "react";

interface ISuperHeroesProps { }

const SuperHeroes = ({ }: ISuperHeroesProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [data, setdata] = useState<IHero[]>([]);

    useEffect(() => {
        axios.get<IHero[]>("http://localhost:4000/superheroes")
            .then(res => {
                setdata(res.data);
                setIsLoading(false)
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false)
            })
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <>
            <h2>Traditional SuperHeroes</h2>
            {data.map(hero => (
                <div key={hero.name}>{hero.name}</div>
            ))}
        </>
    )
}
export default SuperHeroes;