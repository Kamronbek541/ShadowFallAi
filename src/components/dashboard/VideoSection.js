import React from 'react';
import styles from './VideoSection.module.css';
import videoPlaceholder from '../../assets/education_video_back.png'; // Фон для видео
import { FaPlay } from 'react-icons/fa';

const VideoSection = ({ title, description, videos, viewMoreLink }) => {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.header}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <a href={viewMoreLink} target="_blank" rel="noopener noreferrer" className={styles.viewMoreBtn}>
          View More
        </a>
      </div>
      <div className={styles.videoGrid}>
        {videos.map((video, index) => (
          <a href={video.url} target="_blank" rel="noopener noreferrer" key={index} className={styles.videoCard}>
            <div className={styles.videoThumbnail} style={{ backgroundImage: `url(${videoPlaceholder})` }}>
              <div className={styles.playIcon}>
                <FaPlay />
              </div>
            </div>
            <h4>{video.title}</h4>
            <p>{video.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;