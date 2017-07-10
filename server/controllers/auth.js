import jwt from 'jsonwebtoken';
import User from '../models/user';
import config from '../../config/env';

export function signup(req, res, next) {
  const body = req.body;
  User.findOneAsync({email: body.email}).then(foundUser => {
    if(foundUser)
      return next(new Error('User exists'));
    
    const newUser = new User(body);
    newUser.saveAsync().then(savedUser => {
      res.json({
        success: true,
        message: 'Signup successful!'
      });
    }, err => next(err));
  }, err => next(err));
}

export function checkEmail(req, res, next) {
  const email = req.query.email;
  User.findOneAsync({email: email}).then(foundUser => {
    if(foundUser)
      return res.json({available: false});
    
    res.json({available: true});
  })
}

export function checkUsername(req, res, next) {
  const username = req.query.username;
  User.findOneAsync({username: username}).then(foundUser => {
    if(foundUser)
      return res.json({available: false});
    
    res.json({available: true});
  })
}

export function signin(req, res, next) {
  const body = req.body;
  User.findOneAsync({email: body.email}).then(foundUser => {
    if(!foundUser)
      return res.json({successful: false, message: 'User not found'});
      
    foundUser.comparePassword(body.password, (err, isMatch) => {
      if(err || !isMatch) {
        return res.json({success: false, message: 'Incorrect Email or Password'});
      }
      const token = jwt.sign(foundUser, config.jwtSecret);
      res.json({success: true, data: {token: token}});
    })
  })
}