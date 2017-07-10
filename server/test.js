import express from 'express';

const router = express.Router();

router.route('/test')
  .get((req, res, next) => {
      res.json('TEST OK');
  });

// console.log(express.Router)
  
export default router;