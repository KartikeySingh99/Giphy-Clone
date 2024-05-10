import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { RiMenu4Fill } from "react-icons/ri";
import { GifState } from "../context/Gif-Context";
import Logo from "/logo.svg";

const Header = () => {
  const { gf, gifs, setGifs, filter, setfilter, favorites } = GifState();
  const [Categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const fetchCategories = async () => {
    console.log("called");
    try {
      const { data } = await gf.categories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Categories.length === 0) {
      console.log(Categories);
      fetchCategories();
    }
  }, [Categories]);

  return (
    <>
      <nav>
        <div className="relative flex items-center justify-between gap-x-4">
          <Link to={"/"} className="flex gap-2">
            <img src={Logo} className="object-contain w-8" alt="" />
            <h1 className="text-5xl font-extrabold tracking-tight cursor-pointer uppercase">
              Giphy
            </h1>
          </Link>
          <div className="flex items-center">
            <div className="hidden lg:flex items-center gap-x-2">
              {Categories?.slice(0, 5)?.map((data) => (
                <Link
                  key={data.name}
                  className="hover:gradient px-6 py-4 border-b-4 border-white"
                >
                  {data.name}
                </Link>
              ))}
              <button
                onClick={() => setShowCategories(!showCategories)}
                className={`${
                  showCategories ? "gradient" : ""
                } hidden lg:flex border-b-4 border-white px-6 py-4`}
              >
                <HiEllipsisVertical size={24} />
              </button>
            </div>
            <button
              className="lg:hidden"
              onClick={() => setShowCategories(!showCategories)}
            >
              <RiMenu4Fill size={32} />
            </button>

          </div>

          {showCategories && (
            <div className="absolute top-16 left-0 z-20 gradient w-full px-6 pt-4 pb-6">
              <h2 className="text-3xl font-extrabold mb-4">Categories</h2>
              <hr />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-4">
                {Categories?.map((data) => (
                  <Link key={data.name} className="hover:text-gray-300">
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
