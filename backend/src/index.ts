import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// app.use('/',(req,res)=>{
//   console.log("Feedback Management System");
  
// })

app.use('/feedback', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
