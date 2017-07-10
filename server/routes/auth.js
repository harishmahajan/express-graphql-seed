import express from 'express';
import validate from 'express-validation';
import validation from '../../config/validation';
import { 
  signup,
  checkEmail,
  checkUsername,
  signin
} from '../controllers/auth';

const router = express.Router();

router.route('/signup')
  .post(validate(validation.signup), signup);
  
router.route('/checkEmail')
  .get(checkEmail);
router.route('/checkUsername')
  .get(checkUsername);

router.route('/signin')
  .post(validate(validation.signin), signin);
  

  
export default router;