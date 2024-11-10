"use client";
import React from "react";
import { useAuthContext } from "../context/authcontext/page";

const Footer = () : JSX.Element => {
  const authContext = useAuthContext()

  return (
    <footer>
      <hr />
      <div>DRAE Vakinankaratra - copyright {new Date().getFullYear()}</div>
      <h1>user email : {authContext.email}</h1>
    </footer>
  );
};

export default Footer;
