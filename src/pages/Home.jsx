import { useEffect, useState } from "react";
import { GifState } from "../context/Gif-Context";
import Hero_Banner from "/hero-banner.gif";
import GifCard from "../component/GifCard";
import FilterGif from "../component/FilterGif";
import SearchInput from "../component/SearchInput";

const Home = () => {
  const { gf, gifs, setGifs, favorites, filter, setFilter } = GifState();

  // const [trendingGifs, setTrendingGifs] = useState([]);

  console.log(filter);
  const fetchTrendingGifs = async () => {
    try {
      const { data } = await gf.trending({
        limit: 20,
        type: filter,
        rating: "g",
      });
      setGifs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);

  return (
    <>
      <div>
        <SearchInput />
        <FilterGif showTrending={true} alignLeft={true} />
        <div className="my-2">
          <img src={Hero_Banner} className="w-full" alt="" />
        </div>

        <div className="columns-2 lg:columns-3">
          {gifs?.map((data) => (
            <GifCard key={data.id} gif={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
