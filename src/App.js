import MainLayout from "./components/organism/MainLayout";
import MovieProvider from "./components/organism/MovieProvider";
import AuthProvider from "./context/AuthContext";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <MovieProvider>
        <MainLayout>
          <Router />
        </MainLayout>
      </MovieProvider>
    </AuthProvider>
  );
}

export default App;
