const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    reviewText: String,
    createdOn: {
      type: Date,
      default: Date.now,
    },
  });

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  api_id: {
    type: Number,
    required: true,
  },
  publisher: String,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviews: [reviewSchema],
});

mongoose.model('Heroe', heroSchema);