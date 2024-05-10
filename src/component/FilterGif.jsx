import { MdOutlineTrendingUp } from "react-icons/md";
import { GifState } from "../context/Gif-Context";

const filterOptions = [
  {
    title: "GIFs",
    value: "gifs",
    background:
      "bg-gradient-to-tr  from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "Stickers",
    value: "stickers",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-600",
  },
];

const FilterGif = ({ showTrending = false, alignLeft = false }) => {
  const { filter, setFilter } = GifState();

  return (
    <div
      className={`flex py-4 ${alignLeft ? "" : "justify-end"} ${
        showTrending ? "justify-between flex-col sm:flex-row sm:items-center" : ""
      } `}
    >
      {showTrending && (
        <span className="flex gap-x-2">
          <MdOutlineTrendingUp size={32} className="text-teal-500" />
          <span className="font-semibold text-gray-400 text-lg">Trending</span>
        </span>
      )}

      <div className="bg-gray-800 rounded-full min-w-80 flex ">
        {filterOptions.map((data) => (
          <span
            key={data.title}
            onClick={() => setFilter(data.value)}
            className={`${filter === data.value ? data.background : ""} font-semibold rounded-full w-1/3 text-center cursor-pointer py-1.5`}
          >
            {data.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterGif;
