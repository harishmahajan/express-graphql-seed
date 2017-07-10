import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList,
  GraphQLString,
} from 'graphql';

// import User from '/models/user';

export const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    role: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString }
  },
});