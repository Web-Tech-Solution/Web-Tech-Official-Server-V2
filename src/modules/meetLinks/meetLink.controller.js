import client from "../../../index";

const meetLinksCollection = client
  .db("webTech-solution-official")
  .collection("Meet-Links");

const getMeetLink = async (req, res) => {
  try {
    console.log(req.params.id);
    const query = { _id: new ObjectId(req.params.id) };
    const result = await meetLinksCollection.findOne(query);
    res.status(200).send({
      message: "successfully get all services",
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

export const MeetLinksController = {
  getMeetLink,
};
