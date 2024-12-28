import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req:any, res:any):any =>  res.send('Hello, world!123'));
app.get('/trang-chu', (req:any, res:any):any =>  res.send('Hello, Ông Chủ!'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});