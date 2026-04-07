import { useState, useEffect } from "react";
import axios from "axios";

export default function YoutubeAPI() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const url =
      "https://api.freeapi.app/api/v1/public/youtube/videos?page=1&limit=10&query=javascript";

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setValue(response?.data?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-5 py-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        🎬 YouTube Videos
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {value.map((v, i) => {
          const video = v?.items?.snippet;
          const thumbnail =
            video?.thumbnails?.maxres?.url ||
            video?.thumbnails?.high?.url;

          return (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  className="w-full h-48 object-cover"
                />

                {/* Overlay */}
                <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  ▶ Play
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                  {video?.title}
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  {video?.channelTitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {video?.tags?.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}