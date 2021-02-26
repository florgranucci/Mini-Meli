import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import server from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api', server);
app.use(morgan('dev'));

app.listen(PORT, () => console.log('Server is running'));