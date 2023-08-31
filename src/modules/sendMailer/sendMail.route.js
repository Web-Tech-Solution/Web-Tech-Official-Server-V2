import express from "express";
import sendMailToClient from "./mailToClient";
import sendMailToDev from "./mailToDev";

const router = express.Router();

// mail send to client after submitting project
router.post("/mailToClient", sendMailToClient);

// mail send to dev after assigning project
router.post("/mailToDev", sendMailToDev);

export const SendMailRoutes = router;
