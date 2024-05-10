import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import GiphDetails from "./pages/GiphDetails";
import GifsPage from "./pages/GifsPage";
import GifProvider from "./context/Gif-Context";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:category",
          element: <Categories />,
        },
        {
          path: "/search/:query",
          element: <Search />,
        },
        {
          path: "/:type/:slug",
          element: <GifsPage />,
        },
        {
          path: "/gif/:id",
          element: <GiphDetails />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);

  return (
    <>
      <GifProvider>
        <RouterProvider router={router} />
      </GifProvider>
    </>
  );
}

export default App;
