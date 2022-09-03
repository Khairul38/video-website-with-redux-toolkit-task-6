import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addAuthor, removeAuthor } from "../../features/filter/filterSlice";

const VideoGridItem = ({ video = {} }) => {
  const dispatch = useDispatch();
  const { selectedAuthor } = useSelector((state) => state.filter);
  const { id, title, thumbnail, duration, avatar, author, views, date } = video;

  const handleAuthorSelect = () => {
    if (selectedAuthor !== "") {
      dispatch(removeAuthor(author));
    } else {
      dispatch(addAuthor(author));
    }
  };
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`/videos/${id}`}>
            <img src={thumbnail} className="w-full h-auto" alt={title} />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <div className="shrink-0">
            <img src={avatar} className="rounded-full h-6 w-6" alt={author} />
          </div>

          <div className="flex flex-col">
            <Link to="/videos/1">
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>
            <p
              onClick={handleAuthorSelect}
              className="text-gray-400 text-xs mt-2 hover:text-gray-600 cursor-pointer"
            >
              {author}
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
