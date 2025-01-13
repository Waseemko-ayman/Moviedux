import { Suspense } from "react";
import MainLayout from "./components/organism/MainLayout";
import MovieProvider from "./components/organism/MovieProvider";
import Router from "./router";
import PagesLoading from "./components/molecules/PagesLoading";

function App() {
  return (
    <MovieProvider>
      <Suspense fallback={<PagesLoading />}>
        <MainLayout>
          <Router />
        </MainLayout>
      </Suspense>
    </MovieProvider>
  );
}

export default App;
