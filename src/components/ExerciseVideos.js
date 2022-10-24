import React from 'react';
import './exerciseVideos.css';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return '...Loading';
  return (
    <div className="video-wrapper">
      <h3 className="video-watch">
        Watch <span className="video-exercise">{name}</span>exercise videos
      </h3>
      <div className="video-stack">
        {exerciseVideos?.slice(0, 6).map((item, i) => (
          <a
            key={i}
            className="video-item"
            href={`https://youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer">
            <img className="video-img" src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <h4 className="video-title">{item.video.title}</h4>
            </div>
            <div>
              <h4 className="video-channel">{item.video.channelName}</h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
