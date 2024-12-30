import { Button } from "@chakra-ui/react";
import React from "react";

export const Login = () => {
  const login = () => {
    localStorage.setItem("isUserConnected", true);
    location.reload()
  };
  return (
    <div>
      No estas conectado, <Button onClick={login}>inicia sesión</Button>
    </div>
  );
};
