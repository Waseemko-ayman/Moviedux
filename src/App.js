import MainLayout from "./components/organism/MainLayout";
import MovieProvider from "./components/organism/MovieProvider";
import Router from "./router";

function App() {
  return (
    <MovieProvider>
      <MainLayout>
        <Router />
      </MainLayout>
    </MovieProvider>
  );
}

export default App;
