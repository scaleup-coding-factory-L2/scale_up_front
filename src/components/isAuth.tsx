"use client";
import React, { useEffect, useState, useRef, createContext } from "react";
import Keycloak from "keycloak-js";

type KeycloakContextType = Keycloak | null;
export const KeycloakContext = createContext<KeycloakContextType>(null);
export default function isAuth(Component: () => React.JSX.Element) {
  return function IsAuth(props: any) {
    const ref = useRef<boolean>(false);
    const [keycloak, setKeycloak] = useState<Keycloak | null>(null);

    useEffect(() => {
      if (!ref.current) {
        ref.current = true;
        try {
          const keycloak = new Keycloak({
            url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
            realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM ?? "",
            clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID ?? "",
          });
          keycloak
            .init({
              onLoad: "login-required",
              checkLoginIframe: false,
              enableLogging: true,
            })
            .then((authenticated) => {
              setKeycloak(keycloak);
            });
        } catch (error) {
          console.log("Error initializing Keycloak:", error);
        }
      }
    }, []);

    if (!keycloak?.authenticated) {
      return <div>loading...</div>;
    }

    return (
      <KeycloakContext.Provider value={keycloak}>
        <Component {...props} />
      </KeycloakContext.Provider>
    );
  };
}
