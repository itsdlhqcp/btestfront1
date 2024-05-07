import { Link } from "react-router-dom";
import { IF } from "../url";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

/* eslint-disable react/prop-types */
const OttCard = ({ post }) => {
  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [userHasRated, setUserHasRated] = useState(false);

  useEffect(() => {
    // Fetch the average rating for the card from the backend
    const fetchAverageRating = async () => {
      try {
        const response = await axios.get(`/api/cards/${post._id}/rating`);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.error("Error fetching average rating:", error);
      }
    };

    fetchAverageRating();
  }, [post._id]);

  const handleCardClick = async () => {
    // Check if the user has already rated the card
    if (userHasRated) {
      alert("You have already rated this card.");
      return;
    }

    // Increment the click count
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    // Calculate the rating based on the click count
    const newRating = newClickCount % 5 === 0 ? 5 : newClickCount % 5;
    setRating(newRating);

    // Update the rating in the backend
    try {
      await axios.post(`/api/cards/${post._id}/rating`, { rating: newRating });
      setUserHasRated(true);
      // Optionally, fetch the updated average rating and update the state
      // This ensures that the displayed average rating is up-to-date
      const response = await axios.get(`/api/cards/${post._id}/rating`);
      setAverageRating(response.data.averageRating);
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  return (
    <>
      <div className="relative flex w-full p-2 mt-5 space-x-3 bg-black rounded-t-lg">
        <div className="relative w-full overflow-hidden rounded-lg" onClick={handleCardClick}>
          <img src={IF + post.photo} alt="" className="object-cover w-full h-full" />
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
            <h2 className="font-extrabold text-center">{post.title}</h2>
            <p className="font-mono text-center">Release Date: {new Date(post.date).toString().slice(3, 10)}</p>
            <div className="items-center mt-2 space-x-4 font-semibold text-centerflex ">
              <div className="flex items-center justify-center space-x-1">
                {post.categories?.map((c, i) => (
                  <div key={i} className="px-2 py-0.4 font-mono bg-gray-700 rounded-lg">{c}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 p-2 text-white bg-black bg-opacity-0">
          <div>
            {[...Array(5)].map((_, index) => {
              const filledStars = Math.floor(averageRating);
              const hasHalfStar = averageRating - filledStars >= 0.5 && index === filledStars;
              const isYellow = index < filledStars || hasHalfStar;
              return (
                <span key={index} onClick={() => setRating(index + 1)}>
                  {index < filledStars && (
                    <span style={{ color: isYellow ? 'yellow' : 'green' }}>★</span>
                  )}
                  {hasHalfStar && <span style={{ color: 'green' }}>★</span>}
                  {index >= filledStars && <span>☆</span>}
                </span>
              );
            })}
            <span style={{ color: 'red', fontWeight: '650', fontSize: 'small' }}>  {averageRating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <Link to={user ? `/ott/${post._id}` : "/login"}>
        <div className="px-0.5 text-white bg-black rounded-b-lg mb-1 pb-2">
          <p className="font-bold text-center ">Read Comments</p>
        </div>
      </Link>
    </>
  );
};

export default OttCard;

