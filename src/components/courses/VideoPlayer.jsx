
import React from "react";

const VideoPlayer = ({ videoUrl, poster }) => {
  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
      <video
        className="w-full h-full object-contain"
        controls
        poster={poster}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Custom controls could be implemented here */}
    </div>
  );
};

export default VideoPlayer;
