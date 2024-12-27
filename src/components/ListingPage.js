import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListingPage = () => {
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/media');
      setMediaList(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Media Listings</h2>
      {mediaList.map((media) => (
        <div key={media._id}>
          <img src={media.thumbnailUrl} alt="Thumbnail" width="100" />
          <h3>{media.title}</h3>
          <Link to={`/video/${media._id}`}>Watch Video</Link>
        </div>
      ))}
    </div>
  );
};

export default ListingPage;
