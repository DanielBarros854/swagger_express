import express from 'express'
import { serve, setup } from 'swagger-ui-express';
import { Home } from './routes';

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(
  '/docs',
  serve,
  setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
)

app.use(Home)

app.listen(PORT, () => console.log(`Server running on URL: http://localhost:${PORT}/docs`))
