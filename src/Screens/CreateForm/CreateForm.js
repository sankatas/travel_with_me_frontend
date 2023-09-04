import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './CreateForm.css';
import { useNavigate } from "react-router-dom";
import { URL } from "../../Utils/Url";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateForm = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('userName');

  const [reviewData, setReviewData] = useState({
    title: '',
    location: '',
    created_by: user,
    reach_date: '',
    how_stay: '',
    review: '',
    picture1_title: '',
    picture2_title: '',
    picture1: null,
    picture2: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handlePhotoUpload = (event, name) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64String = e.target.result;
        setReviewData({
          ...reviewData,
          [name]: base64String,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${URL}/reviews/review`,
        reviewData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('Review submitted successfully!', {
        position: toast.POSITION.TOP_RIGHT
      });
      console.log('Review submitted successfully:', response.data);
      setReviewData({
        title: '',
        location: '',
        created_by: user,
        reach_date: '',
        how_stay: '',
        review: '',
        picture1_title: '',
        picture2_title: '',
        picture1: null,
        picture2: null,
      });
      navigate("/profile");
    } catch (error) {
      toast.error('Error submitting review!', {
        position: toast.POSITION.TOP_RIGHT
      });
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
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={reviewData.title}
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
            <label>Reach Date</label>
            <input
              type="date"
              name="reach_date"
              value={reviewData.reach_date}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <label>How Was Your Stay?</label>
            <textarea
              name="how_stay"
              value={reviewData.how_stay}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Your Review</label>
            <textarea
              name="review"
              value={reviewData.review}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-row">
            <label>Photo 1</label>
            <input
              type="file"
              name="picture1"
              accept="image/*"
              onChange={(event) => handlePhotoUpload(event, 'picture1')}
              required
            />
            <input
              type="text"
              placeholder="Photo 1 Title"
              name="picture1_title"
              value={reviewData.picture1_title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <label>Photo 2</label>
            <input
              type="file"
              name="picture2"
              accept="image/*"
              onChange={(event) => handlePhotoUpload(event, 'picture2')}
              required
            />
            <input
              type="text"
              placeholder="Photo 2 Title"
              name="picture2_title"
              value={reviewData.picture2_title}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </>
  );
};

export default CreateForm;
