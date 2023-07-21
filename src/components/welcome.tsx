interface IWelcomeProps {
    user?: string;
    primary?: boolean
}

const Welcome = ({ user, primary }: IWelcomeProps) => {
    const text = user ? `Welcome ${user}!` : `Welcome!`
    return (
        <>
            {
                primary
                    ? <h1>{text}</h1>
                    : <h2>{text}</h2>
            }
        </>
    )
}
export default Welcome