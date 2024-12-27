import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoPage = () => {
  const { id } = useParams();
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await axios.get(`http://localhost:5000/api/media/${id}`);
      setVideoUrl(res.data.videoUrl);
    };
    fetchVideo();
  }, [id]);

  return (
    <div>
      <h2>Video Player</h2>
      <video controls autoPlay>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPage;
