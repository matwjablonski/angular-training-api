const express = require("express");
const app = express();
const cors = require('cors');

const BooksRouter = require("./controllers/books");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/api', (req, res) => {
    res.json({
      availableRoutes: {
        '/api': ['GET'],
      }
    })
  });

app.use('/api/books', BooksRouter);
  

app.listen(3000, () => {
 console.log("Server running on port 3000");
});