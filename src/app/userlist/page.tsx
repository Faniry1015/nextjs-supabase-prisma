"use client";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import UserList from "./UserList";

// Create a client
const queryClient = new QueryClient();

const UserListDataProvider = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <UserList />
    </QueryClientProvider>
  );
};

export default UserListDataProvider;
