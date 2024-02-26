"use client";
import isAuth from "@/components/isAuth";
import { KeycloakContext } from "@/components/isAuth";
import { useContext } from "react";
function Products() {
  const keycloak = useContext(KeycloakContext);
  return (
    <div className={"flex flex-col"}>
      welcome to home{" "}
      <span>
        {keycloak?.tokenParsed?.family_name} {keycloak?.tokenParsed?.given_name}
      </span>
      <div>
        <button onClick={() => keycloak?.logout()}>logout</button>
      </div>
    </div>
  );
}

export default isAuth(Products);
