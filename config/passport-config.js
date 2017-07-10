import passportJWT from 'passport-jwt';
import config from './env';
import UserSchema from '../server/models/user';
const ExtractJwt = passportJWT.ExtractJwt;
const jwtStrategy = passportJWT.Strategy;

function passportConfiguration(passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.jwtSecret;
  passport.use(new jwtStrategy(opts, (jwtPayload, cb) => {
    UserSchema.findOneAsync({ _id: jwtPayload._doc._id })
      .then((user) => cb(null, user))
      .error((err) => cb(err, false));
  }));
}
export default passportConfiguration;
