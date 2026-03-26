const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://hanan:Hanan123@cluster0.fmrlkgh.mongodb.net/?appName=Cluster0')
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log('DB Error:', err);
  });
