import React, { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';

function MyVideoComponent() {
  const videoRef = useRef(null);
  const [showImage, setShowImage] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setShowImage(false);
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="relative max-w-3xl mx-auto border-2 border-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      {showImage && (
        <div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center"
          onClick={handleVideoClick}
        >
          <FaPlay className="text-5xl text-white opacity-75 hover:opacity-100 transition-opacity" />
        </div>
      )}
      <video
        className={`w-full ${showImage ? 'hidden' : 'block'}`}
        ref={videoRef}
        onClick={handleVideoClick}
      >
        <source src="virtual.mp4" type="video/mp4" />
      </video>
      <img
        className={`w-full ${showImage ? 'block' : 'hidden'}`}
        src="tom.png"
        alt="My Image"
        onClick={handleVideoClick}
      />
    </div>
  );
}

export default MyVideoComponent;
