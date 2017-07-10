import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import { userType } from './types';
import User from '../models/user';

const userQuery = {
  type: userType,
  args: {email: {type: new GraphQLNonNull(GraphQLString)}},
  resolve: function(value, {email}) {
    return User.findOneAsync({email: email});
  }
}

export const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: userQuery
  }
}) 