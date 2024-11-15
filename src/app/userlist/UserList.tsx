"use client";
import React, { useEffect } from "react";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { User } from "../context/authcontext/page";

const UserList = (): JSX.Element => {
    const fetchUsers = async (): Promise<User[]> => {
        try {
            const response = await fetch("/api/users", {
                method: "GET",
            });
            return await response.json() as User[];

        } catch (error) {
            console.error("Error fetching users:", error);
            return [];
        }
    };

    const { data, error, isLoading } = useQuery<User[]>({ queryKey: ['users'], queryFn: fetchUsers });

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error.message}</div>;

    return (
        <div>
            <h1 className="text-3xl">Liste des utilisateurs enregistr s</h1>
            <hr />
            <ul>
                {data?.map((user) => (
                    <li key={user.name}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
