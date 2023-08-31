import client from "../../../index";

const analyticsCollection = client
  .db("webTech-solution-official")
  .collection("analytics");

const getAnalytics = async (req, res) => {
  const result = await analyticsCollection.find({}).toArray();
  res.send(result);
};

export const AnalyticsController = {
  getAnalytics,
};
