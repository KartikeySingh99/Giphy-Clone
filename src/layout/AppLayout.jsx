import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const AppLayout = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen xl:px-52" >
      <div className="container px-6 py-4 mx-auto ">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
