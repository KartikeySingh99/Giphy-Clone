import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const searchPlaceholders = [
  "Search All GIFs and Stickers",
  "@Username To Search Channels",
];

const SearchInput = () => {
  const [placeholderIndex, setPlacehoIndexlder] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlacehoIndexlder((prev) => (prev + 1) % searchPlaceholders.length);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex h-20 rounded-md my-4">
      <input
        type="text"
        className="w-full rounded-l-md text-black px-4 outline-none text-xl"
        placeholder={searchPlaceholders[placeholderIndex]}
      />
      <button className="bg-pink-500 h-full px-6 rounded-r-md">
        <FaSearch size={28} />
      </button>
    </div>
  );
};

export default SearchInput;
