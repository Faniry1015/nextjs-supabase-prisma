"use client"
import { useAuthContext } from "./context/authcontext/page";

export default function Home() {
  const userContext = useAuthContext();
  console.log(userContext)

  if (!userContext.email) {
    return (
      <div>
        <h1>Home</h1>
        <p>This is the home page</p>
        <p>Not logged in</p>
      </div>
    );

  }
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
