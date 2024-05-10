import { Link } from "react-router-dom";

const GifCard = ({ gif, hover = true }) => {
  return (
    <>
      <Link to={`${gif?.type}/${gif?.slug}`}>
        <div className="w-full mb-2 relative cursor-pointer group aspect-video">
          <div className="overflow-hidden">
            <img
              src={gif?.images?.fixed_width?.webp}
              className="w-full object-cover rounded transition-all duration-300 group-hover:scale-105"
              alt=""
            />
            {hover && (
              <div className="transition-all duration-300 absolute inset-0 rounded opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-0 bg-gradient-to-b from-transparent via-transparent to-black flex items-end p-2">
                <div className="flex items-center justify-center gap-x-2">
                  <img src={gif?.user?.avatar_url} className="h-8" alt="" />
                  <p className="font-bold">{gif?.user?.display_name}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default GifCard;
