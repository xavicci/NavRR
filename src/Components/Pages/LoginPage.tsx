import { useState } from "react";
import { useAuth } from "./auth";

const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.login(username);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="">Escribe tu nombre de usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};

export default LoginPage;
