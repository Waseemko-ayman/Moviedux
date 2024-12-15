import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/MainLayout";
import WatchlistPage from "./pages/WatchlistPage";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
