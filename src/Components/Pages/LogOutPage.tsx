import { useAuth } from "./auth";

const LogOutPage = () => {
  const logout = (e: React.ChangeEvent<HTMLFormElement>) => {
    const auth = useAuth();
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label htmlFor="">Segura de salir?</label>
        <button type="submit">Cerrar</button>
      </form>
    </>
  );
};

export default LogOutPage;
