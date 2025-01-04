import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';

import route from './routes';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//HTTP request logger middleware for node.js
app.use(morgan('combined'));

// Set handlebars as the template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Define the default route
route(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
