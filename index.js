const express = require('express');
const app = express();
const cors = require('cors');
let port = 3001;

app.use(express.json());
app.use(cors());

const db = require('./models');

const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);
const newsRouter = require('./routes/News');
app.use("/news", newsRouter);
const reportsRouter = require('./routes/Reports');
app.use("/reports", reportsRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || port, () => {
        console.log(`running on port ${port}`); 
    });
});      