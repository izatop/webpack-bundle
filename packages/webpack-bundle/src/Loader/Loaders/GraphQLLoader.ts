import {Loader} from "../Loader";

export class GraphQLLoader extends Loader {
    protected getDefaults() {
        return {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: 'graphql-tag/loader'
        };
    }
}
