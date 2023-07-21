import { useState } from "react";
import { generateComments } from "./utilities";
import RedditComment from "./redditComment";
import { useTheme } from "../../contexts/theme";

import "./reddit.css"

interface IRedditThreadProps { }

const LEVEL = 0;

const RedditThread = ({ }: IRedditThreadProps) => {
    const { isDark, togglePreset } = useTheme();

    const [comments, setComments] = useState(generateComments);

    function handleClick() {
        togglePreset();
    }

    return (
        <div className="reddit-thread">
            <button onClick={handleClick}>{`Switch to ${isDark ? "light" : "dark"} Mode`}</button>
            {comments.map((comment, i) => (
                <RedditComment key={i} level={LEVEL} comment={comment} />
            ))}
        </div>
    )
}
export default RedditThread