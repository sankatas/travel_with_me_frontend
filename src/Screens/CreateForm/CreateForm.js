import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import "./CreateForm.css"

const CreateForm = () => {
  const [reviewData, setReviewData] = useState({
    stayExperience: '',
    dateOfStay: '',
    companions: '',
    reviewTitle: '',
    reviewText: '',
    location: '',
    photos: [
      { photo: null, title: '' },
      { photo: null, title: '' },
    ],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handlePhotoUpload = (event, index) => {
    const file = event.target.files[0];
    const updatedPhotos = [...reviewData.photos];
    updatedPhotos[index].photo = file;
    setReviewData({
      ...reviewData,
      photos: updatedPhotos,
    });
  };

  const handlePhotoTitleChange = (event, index) => {
    const { value } = event.target;
    const updatedPhotos = [...reviewData.photos];
    updatedPhotos[index].title = value;
    setReviewData({
      ...reviewData,
      photos: updatedPhotos,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('stayExperience', reviewData.stayExperience);
    formData.append('dateOfStay', reviewData.dateOfStay);
    formData.append('companions', reviewData.companions);
    formData.append('reviewTitle', reviewData.reviewTitle);
    formData.append('reviewText', reviewData.reviewText);
    formData.append('location', reviewData.location);
    reviewData.photos.forEach((photo, index) => {
      formData.append(`photo${index + 1}`, photo.photo);
      formData.append(`photo${index + 1}Title`, photo.title);
    });

    try {
      const response = await axios.post('your_api_endpoint', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Review submitted successfully:', response.data);
      setReviewData({
        stayExperience: '',
        dateOfStay: '',
        companions: '',
        reviewTitle: '',
        reviewText: '',
        location: '',
        photos: [
          { photo: null, title: '' },
          { photo: null, title: '' },
        ],
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <>
    <Header />
    <div className="create-form-container">
      
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>How was your stay?</label>
          <input
            type="text"
            name="stayExperience"
            value={reviewData.stayExperience}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label>When did you go?</label>
          <input
            type="date"
            name="dateOfStay"
            value={reviewData.dateOfStay}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* ... (other fields) */}
        <div className="form-row">
          <label>Title your review</label>
          <input
            type="text"
            name="reviewTitle"
            value={reviewData.reviewTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Write your review</label>
          <textarea
            name="reviewText"
            value={reviewData.reviewText}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={reviewData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Photo 1</label>
          <input
            type="file"
            name="photo1"
            accept="image/*"
            onChange={(event) => handlePhotoUpload(event, 0)}
          />
          <input
            type="text"
            placeholder="Photo 1 Title"
            value={reviewData.photos[0].title}
            onChange={(event) => handlePhotoTitleChange(event, 0)}
          />
        </div>
        <div className="form-row">
          <label>Photo 2</label>
          <input
            type="file"
            name="photo2"
            accept="image/*"
            onChange={(event) => handlePhotoUpload(event, 1)}
          />
          <input
            type="text"
            placeholder="Photo 2 Title"
            value={reviewData.photos[1].title}
            onChange={(event) => handlePhotoTitleChange(event, 1)}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
    </>
  );
};

export default CreateForm;
