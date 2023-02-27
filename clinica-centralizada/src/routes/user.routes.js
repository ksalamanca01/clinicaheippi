import userLoginController from '#Controllers/user-login.controller.js';
import userProfileController from '#Controllers/user-profile.controller.js';
import userRegisterController from '#Controllers/user-register.controller.js';
import userUnregisterController from '#Controllers/user-unregister.controller.js';
import userUpdateDataController from '#Controllers/user-update-data.controller.js';
import userUpdateEmailController from '#Controllers/user-update-email.controller.js';
import userUpdatePasswordController from '#Controllers/user-update-password.controller.js';

import { Router } from 'express';

const userRouter = Router();

userRouter.post('/register',  userRegisterController);
userRouter.post('/login',  userLoginController);
userRouter.get('/profile',  userProfileController);
userRouter.patch(
    '/update-data',
    userProfileController,
    userUpdateDataController,
    
);
userRouter.patch(
    '/update-email',
    userProfileController,
    userUpdateEmailController,
    
);
userRouter.patch(
    '/update-password',
    userProfileController,
    userUpdatePasswordController
);
userRouter.delete(
    '/unregister',
    userProfileController,
    userUnregisterController
);

export default userRouter;
