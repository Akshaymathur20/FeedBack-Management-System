type Feedback = {
    name: string;
    feedback: string;
  };
  
  const feedbacks: Feedback[] = [];
  
  export const getAllFeedback = (): Feedback[] => feedbacks;
  
  export const addFeedback = (name: string, feedback: string): void => {
    feedbacks.push({ name, feedback });
  };
  