import { Suspense, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import User from "./user";
import ActivityIndicator from "./activityIndicator";

interface IUsersProps {
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const Users = ({ }: IUsersProps) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const { data: users, isLoading, error } = useFetch<IUser[]>(url);

    return (
        <>
            {isLoading
                ? <ActivityIndicator color='turquoise' />
                : users.length > 0
                    ? <div className="users-container" style={{
                        margin: "1rem 0"
                    }}>
                        {users.map((user) => (
                            <User key={user.id} user={user} />
                        ))}
                    </div>
                    : <h1>{error}</h1>
            }
        </>
    )
}
export default Users