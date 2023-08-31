import client from "../../../index";

const teamMembersCollection = client
  .db("webTech-solution-official")
  .collection("teamMembers");

const getAllTeamMembers = async (req, res) => {
  try {
    const query = {};
    const result = await teamMembersCollection.find(query).toArray();
    res.status(200).send({
      message: "successfully posted",
      data: result,
    });
  } catch (error) {
    res.status(404).send({
      message: "Operation failed! for some issue!",
      data: null,
    });
  }
};

export const TeamMembersController = {
  getAllTeamMembers,
};
