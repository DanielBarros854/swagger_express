import express from 'express'
import { home } from './routes';

const PORT = process.env.PORT || 3333;

const app = express();

app.use('', home)

app.listen(PORT, () => console.log(`Server running on URL: http://localhost:${PORT}`))
