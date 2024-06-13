import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackList: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<{ name: string; feedback: string }[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/feedback');
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedback', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      {feedbacks.map((feedback, index) => (
        <div key={index}>
          <h3>{feedback.name}</h3>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;
