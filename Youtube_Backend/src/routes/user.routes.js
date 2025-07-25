import { Router } from "express";
import { registerUser, 
    logoutUser , 
    loginUser, 
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    getUserChannelProfile,
    updateAccountDetails,
    updateUserAvatar,
    updateUserCoverImage,
    getWatchHistory
} from "../controller/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js"; 
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount:1
        },{
            name: "coverImage",
            maxCount:1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)    

router.route("/refresh-token").post(refreshAccessToken)

//secured routes

router.route("/logout").post(verifyJWT,logoutUser)
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("current-user").get(verifyJWT,getCurrentUser)
router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/update-account").patch(verifyJWT,updateAccountDetails)
router.route("/avatar-update").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
router.route("/COVER-IMAGE-update").patch(verifyJWT,upload.single("CoverImage"),updateUserCoverImage)
router.route("/history").get(verifyJWT,getWatchHistory)


export default router 