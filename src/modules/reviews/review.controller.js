import client from "../../../index";

const reviewsCollection = client
  .db("webTech-solution-official")
  .collection("reviews");

const getAllReviews = async (req, res) => {
  try {
    const query = {};

    const result = await reviewsCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully get all rejected orders",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

const createReview = async (req, res) => {
  try {
    const review = req.body;
    const result = await reviewsCollection.insertOne(review);
    res.status(200).send({
      message: "successfully posted",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

export const ReviewController = {
  getAllReviews,
  createReview,
};
