"use client"
import React, { useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = React.useState<Array<{name: string}>>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const usersFromServer = await response.json();
        if (!Array.isArray(usersFromServer)) {
          throw new Error("Expected an array of users");
        }

        setUsers(usersFromServer);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return <div>{users.map((user) => <div key={user.name}>{user.name}</div>)}</div>;
};

export default UserList;
