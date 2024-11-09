"use client";
import React from "react";
import { useAuthContext } from "../context/authcontext/page";

/**
 * Handles user sign in.
 *
 * @param {React.FormEvent<HTMLFormElement>} event - The form event
 * @returns {Promise<void>} A promise that resolves when the request is complete
 */
const handleSubmit = async (
  event: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const userData = Object.fromEntries(formData.entries()) as {
    email: string;
    password: string;
  };

  if (!userData.email) {
    console.error("handleSubmit: email is empty");
    return;
  }
  console.log(userData)

  try {
    const response = await fetch("/api/authentification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      console.error(
        "handleSubmit: Error in server response",
        response.statusText
      );
      return;
    }

    const user = (await response.json()) as {
      name: string;
      email: string;
      role: string;
      city?: string;
    };

    if (!user) {
      console.error("handleSubmit: user is empty");
      return;
    }
    console.log(user)

    // useAuthContext?.setUserContext(user);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

/**
 * Renders the sign in form.
 *
 * @returns {JSX.Element} The sign in form
 */
const SignIn = (): JSX.Element => {
  const userContext = useAuthContext();
  const formRef = React.useRef<HTMLFormElement>(null);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Sign In</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md text-black focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
