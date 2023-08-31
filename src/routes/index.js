import express from "express";
import { analyticsRoutes } from "../modules/analytics/analytics.route";
import { BlogRoutes } from "../modules/blogs/blog.route";
import { MeetLinksRoutes } from "../modules/meetLinks/meetLink.route";
import { ProjectRoutes } from "../modules/projects/projects.route";
import { ReviewRoutes } from "../modules/reviews/review.route";
import { SendMailRoutes } from "../modules/sendMailer/sendMail.route";
import { ServiceRoutes } from "../modules/services/service.route";
import { TeamMembersRoutes } from "../modules/teamMembers/teamMembers.route";
import { UserRoutes } from "../modules/users/user.route";

const router = express.Router();

// user routes
router.use("/user", UserRoutes);

// team member routes
router.use("/teamMember", TeamMembersRoutes);

// service routes
router.use("/service", ServiceRoutes);

// project routes
router.use("/project", ProjectRoutes);

// review routes
router.use("/review", ReviewRoutes);

// blog routes
router.use("/blog", BlogRoutes);

// meet link routes
router.use("/meetLink", MeetLinksRoutes);

// analytics routes
router.use("/analytic", analyticsRoutes);

// send mailer routes
router.use("/sendMail", SendMailRoutes);

export default router;
