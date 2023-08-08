import { Link } from "react-router-dom";
import { useAddSuperHeroData, useSuperHeroesData } from "./hooks/useSuperHeroesData";
import { useState } from "react";
import { styled } from "styled-components";

interface IRQSuperHeroesProps { }

const StyledWrapper = styled("div")`
    display: flex;
`

const StyledInput = styled("input")`
        padding: 0 0.25rem;
`

const RQSuperHeroes = ({ }: IRQSuperHeroesProps) => {
    const [name, setName] = useState("");
    const [alterEgo, setAlterEgo] = useState("");

    const { data, isLoading, isError, error, refetch, isFetching } = useSuperHeroesData({
        queryKey: "super-heroes"
    })

    const {
        mutate: addHero,
        isLoading: isLoadingAddHero,
        isError: isErrorAddHero,
        error: errorAddHero } = useAddSuperHeroData();

    function handleClick() {
        refetch()
    }

    function handleAddHeroClick() {
        console.log({ name, alterEgo });
        const hero = { name, alterEgo };
        addHero(hero);
        reset()
    }

    function reset() {
        setName("")
        setAlterEgo("")
    }

    console.log({ isLoading, isFetching })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{(error as { message: string }).message}</h2>
    }

    return (
        <>
            <h2>RQ SuperHeroes</h2>
            <div style={{
                display: "flex",
                flexFlow: "column",
                textAlign: "center",
                gap: 16
            }}>
                <StyledWrapper>
                    <StyledInput
                        type="text"
                        placeholder="Hero Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <StyledInput
                        type="text"
                        placeholder="Alter Ego"
                        value={alterEgo}
                        onChange={(e) => setAlterEgo(e.target.value)}
                    />
                    <button onClick={handleAddHeroClick}>Add Hero</button>
                </StyledWrapper>
                {isLoadingAddHero && "Loading add hero.."}
                {isErrorAddHero && <h2>{(errorAddHero as { message: string }).message}</h2>}
            </div>
            <button onClick={handleClick}>Fetch superheroes</button>
            {data?.data.map(hero => (
                <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </>
    )
}
export default RQSuperHeroes;