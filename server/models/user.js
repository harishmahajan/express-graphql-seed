import Promise from 'bluebird';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

/**
* User Schema
*/
const UserSchema = new mongoose.Schema({
  role: { type: String, default: null },
  username: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String }
});

UserSchema.pre('save', function(next) {
  const user = this;
  
  if(!user.password)
    return next();
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, (hashErr, hash) => {
        if (hashErr) {
          return next(hashErr);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function comparePassword(pw, cb) {
  const user = this;

  bcrypt.compare(pw, user.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);