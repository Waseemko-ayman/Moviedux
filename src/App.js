import { useState } from "react";
import MainLayout from "./components/organism/MainLayout";
import { RoleContext } from "./context/UserRole";
import { ROLE } from "./router/role";
import Router from "./router";

function App() {
  const [role,] = useState(ROLE.ADMIN);
  return (
    <RoleContext.Provider value={{ role }}>
      <MainLayout>
        <Router />
      </MainLayout>
    </RoleContext.Provider>
  );
}

export default App;
