import express from 'express';
import cors from 'cors';
import sequelize from './config/dbconnect.js';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Welcome to the Web TMDT RS API');
});
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

export default app;