import passport from 'passport';
import express from 'express';
import config from '../../config/env';
const router = express.Router();

import { profile } from '../controllers/user';

router.use(passport.authenticate('jwt', config.passportOptions));
router.route('/profile')
  .get(profile);
  
export default router;