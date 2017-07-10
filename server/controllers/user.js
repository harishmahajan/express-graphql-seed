import _ from 'lodash';

export function profile(req, res, next) {
  const profile = _.omit(req.user.toObject(), 'password');
  res.json(profile);
}