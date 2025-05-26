import React, { useState } from 'react';
import './ReelsPortfolio.css';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const videos = [
  '/videos/wedding.mp4',
  '/videos/party.mp4',
  '/videos/vid3.mp4'
];

const ReelsPortfolio = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const togglePlay = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (video.paused) {
      video.play();
      setCurrentVideo(index);

      // Fullscreen on mobile
      if (window.innerWidth <= 600 && video.requestFullscreen) {
        video.requestFullscreen();
      }
    } else {
      video.pause();
      setCurrentVideo(null);
    }
  };

  return (
    <section className="reels-section">
      <div className="swipe-tip">↑ Swipe up to view more</div>
      <div className="reels-container">
        {videos.map((src, index) => (
          <div className="reel" key={index}>
            <video
              id={`video-${index}`}
              className="reel-video"
              src={src}
              playsInline
              loop
              muted
            />
            <button className="play-button" onClick={() => togglePlay(index)}>
              {currentVideo === index ? <FaPauseCircle size={64} /> : <FaPlayCircle size={64} />}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelsPortfolio;
