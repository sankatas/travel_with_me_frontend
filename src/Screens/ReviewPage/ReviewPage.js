import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewPage.css';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import '@fortawesome/fontawesome-free/css/all.css';
import { URL } from "../../Utils/Url";

export default function TravelBlog() {
  const { id } = useParams();
  const [travelBlog, setTravelBlog] = useState(null);

  useEffect(() => {

    axios
      .get(`${URL}/reviews/getreviewbyid/${id}`)
      .then((response) => {
        const blogData = response.data.data[0];
        setTravelBlog(blogData);
      })
      .catch((error) => {
        console.error('Error fetching travel blog:', error);
      });
  }, [id]);

  return (
    <div>
      <Header />

      {travelBlog ? (
        <div className="travel-blog">
          <h1>{travelBlog.title}</h1>
          <p className="location">
            <i className="fa fa-map-marker" /> {travelBlog.location}
          </p>
          <p className="created-by">Created by: {travelBlog.created_by}</p>
          <p className="created-date">
            Created on: {new Date(travelBlog.created_date).toLocaleDateString()}
          </p>
          <div>
            <p>{travelBlog.picture1_title}</p>
            <img
              src={travelBlog.picture1 || 'placeholder_image1.jpg'}
              alt={travelBlog.picture1_title}
              className="blog-image"
            />
          </div>
          <div>
            <p>{travelBlog.picture2_title}</p>
            <img
              src={travelBlog.picture2 || 'placeholder_image2.jpg'}
              alt={travelBlog.picture2_title}
              className="blog-image"
            />
          </div>
          <p className="reach-date">
            Reached Date: {new Date(travelBlog.reach_date).toLocaleDateString()}
          </p>
          <p className="how-stay">How to stay: {travelBlog.how_stay}</p>
          <div className="blog-review">
            <h2>Review</h2>
            <p>{travelBlog.review}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
