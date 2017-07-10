import { GraphQLSchema } from 'graphql';
import { queryType } from './queries';

export default new GraphQLSchema({
    query: queryType
})