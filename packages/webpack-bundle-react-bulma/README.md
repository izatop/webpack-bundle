# webpack-bundle-react-bulma

The package provide a common React with Bulma configuration for Webpack.

## Usage

First do install `webpack-bundle-react-bulma` and its peer dependencies
and then write simple Webpack configuration:

```typescript
// webpack.config.ts
import ReactBulmaBundle from "webpack-bundle-react-bulma";

const config = new ReactBulmaBundle();
export default config.getWebpackConfig();
```
