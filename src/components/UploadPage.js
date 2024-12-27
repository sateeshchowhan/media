import React, { useState } from 'react';
import axios from 'axios';

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('thumbnail', thumbnail);
      formData.append('video', video);
  
      await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      alert('Upload Successful');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    }
  };
  

  return (
    <div>
      <h2>Upload Media</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="50"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="200"
        />
        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setThumbnail)} />
        <input type="file" accept="video/*" onChange={(e) => handleFileChange(e, setVideo)} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPage;
