import axios from "axios";
import { QueryFunctionContext, useQuery } from "react-query";

interface IDependentQueriesProps {
    email: string
}

const fetchUserByEmail = ({ queryKey }: QueryFunctionContext) => {
    const email = queryKey[1];
    return axios.get(`http://localhost:4000/users/${email}`);
}

const fetchCoursesByChannelId = ({ queryKey }: QueryFunctionContext) => {
    const channelId = queryKey[1];
    return axios.get(`http://localhost:4000/channels/${channelId}`);
}

const DependentQueries = ({ email }: IDependentQueriesProps) => {
    const { data: user } = useQuery({
        queryKey: ["user", email],
        queryFn: fetchUserByEmail
    });

    const channelId = user?.data.channelId;

    const { data: channel } = useQuery({
        queryKey: ["courses", channelId],
        queryFn: fetchCoursesByChannelId,
        enabled: !!channelId
    });

    return (
        <>
            <h2>DependentQueries</h2>
            {(channel?.data.courses as any[])?.map((course: any, i) => (
                <div key={`course.id${i}`}>{course}</div>
            ))}
        </>
    )
}
export default DependentQueries;