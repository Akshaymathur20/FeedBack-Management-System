import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm: React.FC = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/feedback', { name, feedback });
      setName('');
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback', error);
    }
  };

  return (
    <div className="container">
    <h2>FeedBack Form</h2>
    <form onSubmit={handleSubmit}>  
        <label htmlFor='name'>Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor='feedback'>Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default FeedbackForm;
