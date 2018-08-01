# webpack-bundle-react-spa

The package provide a common React SPA configuration for Webpack.

## Usage

First do install `webpack-bundle-react-spa` and its peer dependencies
and then write simple Webpack configuration:

```typescript
// webpack.config.ts
import ReactSPABundle from "webpack-bundle-react-spa";

const config = new ReactSPABundle();
export default config.getWebpackConfig();
```
