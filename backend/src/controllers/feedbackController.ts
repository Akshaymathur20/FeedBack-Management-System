import { Request, Response } from 'express';
import { getAllFeedback, addFeedback } from '../services/feedbackService';

export const getFeedback = (req: Request, res: Response) => {
  res.json(getAllFeedback());
};

export const submitFeedback = (req: Request, res: Response) => {
  const { name, feedback } = req.body;
  if (!name || !feedback) {
    return res.status(400).json({ error: 'Name and feedback are required' });
  }
  addFeedback(name, feedback);
  res.status(201).json({ message: 'Feedback submitted successfully' });
};
