import { useEffect, useRef, useState } from "react";
import { IRedditComment } from "./interfaces";

interface IRedditCommentProps {
    comment: IRedditComment;
    level: number;
}

const RedditComment = ({ comment, level }: IRedditCommentProps) => {
    const redditCommentRef = useRef<HTMLDetailsElement>(null);

    return (
        <details ref={redditCommentRef} className="reddit-comment" >
            <summary>
                <span>{comment.comment}</span>
            </summary>
            <p>{comment.comment}</p>
            <div className="replies-container">
                <div className="replies">
                    {comment.replies.map((reply, i) => (
                        <RedditComment
                            key={`${reply.comment}${i}${Array.from({ length: level }).map((v, i) => i).join("")}`} level={level + 1}
                            comment={reply}
                        />
                    ))}
                </div>
            </div>
        </details>
    )
}
export default RedditComment