import { useState, useEffect } from "react";
import axios from "axios";

export default function YoutubeAPI() {
  const [value, setValue] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    totalPages: 10,
    totalItems: 96,
    currentPageItems: 10,
    previousPage: false,
    nextPage: true
  });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchVideos = async (page = 1) => {
    setLoading(true);
    try {
      const url = `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}&limit=10&query=javascript`;
      const response = await axios.get(url);
      
      // Access the nested data structure correctly
      setValue(response?.data?.data?.data || []);
      setPagination({
        page: response?.data?.data?.page || 1,
        limit: response?.data?.data?.limit || 10,
        totalPages: response?.data?.data?.totalPages || 1,
        totalItems: response?.data?.data?.totalItems || 0,
        currentPageItems: response?.data?.data?.currentPageItems || 0,
        previousPage: response?.data?.data?.previousPage || false,
        nextPage: response?.data?.data?.nextPage || false
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setCurrentPage(newPage);
    }
  };

  const formatDuration = (duration) => {
    if (!duration) return "N/A";
    // Parse ISO 8601 duration format (PT19M35S)
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return duration;
    
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const formatNumber = (num) => {
    if (!num) return "0";
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  if (loading) {
    return (
      <div className="px-5 py-6 bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading videos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-5 py-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header with stats */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🎬 YouTube Videos
          </h1>
          <p className="text-gray-600">
            Showing {value.length} of {pagination.totalItems} videos • Page {pagination.page} of {pagination.totalPages}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {value.map((v, i) => {
            // Access the nested items structure
            const videoItem = v?.items;
            const snippet = videoItem?.snippet;
            const statistics = videoItem?.statistics;
            const contentDetails = videoItem?.contentDetails;
            
            const thumbnail = snippet?.thumbnails?.maxres?.url 

            return (
              <div
                key={videoItem?.id || i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer group"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${videoItem?.id}`, '_blank')}
              >
                {/* Thumbnail with duration overlay */}
                <div className="relative">
                  <img
                    src={thumbnail}
                    alt={snippet?.title || "Video thumbnail"}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {formatDuration(contentDetails?.duration)}
                  </div>

                  {/* Hover Play Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition duration-300 bg-white rounded-full p-3">
                      <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
                    {snippet?.title}
                  </h2>

                  <p className="text-xs text-gray-500 mb-2">
                    {snippet?.channelTitle}
                  </p>

                  {/* Video Stats */}
                  <div className="flex gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      {formatNumber(statistics?.viewCount)}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      {formatNumber(statistics?.likeCount)}
                    </span>
                  </div>

                  {/* Published Date */}
                  <p className="text-xs text-gray-400 mb-3">
                    {formatDate(snippet?.publishedAt)}
                  </p>

                  {/* Tags */}
                  {snippet?.tags && snippet.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {snippet.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                      {snippet.tags.length > 2 && (
                        <span className="text-xs text-gray-400">
                          +{snippet.tags.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {value.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found</p>
          </div>
        )}

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!pagination.previousPage}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                pagination.previousPage
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                let pageNum;
                if (pagination.totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= pagination.totalPages - 2) {
                  pageNum = pagination.totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      currentPage === pageNum
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!pagination.nextPage}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                pagination.nextPage
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}