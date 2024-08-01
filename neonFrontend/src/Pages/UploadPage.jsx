import React, { useState } from 'react';
import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({ cloud_name: 'ds0dvm4ol', secure: true });

const UploadPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleThumbnailUpload = async () => {
    const formData = new FormData();
    formData.append('file', thumbnail);
    formData.append('upload_preset', 'your_upload_preset');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/image/upload`,
      { method: 'POST', body: formData }
    );
    const data = await response.json();
    console.log('Thumbnail uploaded:', data);
  };

  const handleVideoUpload = async () => {
    const formData = new FormData();
    formData.append('file', video);
    formData.append('upload_preset', 'your_upload_preset');

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/video/upload`,
      { method: 'POST', body: formData }
    );
    const data = await response.json();
    console.log('Video uploaded:', data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleThumbnailUpload();
    handleVideoUpload();
  };

  return (
    <div className='container'>
        <div className='box-container'>

       
      <h1>Upload Page</h1>
      <form onSubmit={handleSubmit}>
        <div className='itemone'>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            maxLength="50"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='itemtwo'>
          <label>Description:</label>
          <textarea
            value={description}
            maxLength="200"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className='itemthree'>
          <label>Upload Thumbnail:</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>
        <div className='itemfour'>
          <label>Upload Video:</label>
          <input
            type="file"
            accept="video/mp4, video/avi, video/mpg"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      </div>
    </div>
  );
};

export default UploadPage;