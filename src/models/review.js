import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    courseNo: {
      type: String,
      required: true,
    },
    courseName: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    },
    like: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
