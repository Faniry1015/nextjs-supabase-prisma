"use client"
import { useState } from "react";
import { useAuthContext, User } from "./context/authcontext/page";

export default function Home() {
  const user = useAuthContext();
  console.log(user)

  if (!user.name) {
    return (
      <div>
        <h1>Home</h1>
        <p>This is the home page</p>
        <p>Not logged in</p>
      </div>
    );

  }
// const [currentUser, SetCurrentUser] = useState<User | null>(null);
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, id.
      Dicta qui suscipit rem repellendus similique sapiente. Amet, pariatur
      possimus! Hic consectetur soluta temporibus rerum eligendi provident,
      nobis ipsum odio?
    </div>
  );
}
