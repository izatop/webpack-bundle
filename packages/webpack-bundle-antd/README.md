# webpack-bundle-antd

The package provide a common Ant Design configuration for Webpack.

## Usage

First do install `webpack-bundle-antd` and its peer dependencies
and then write simple Webpack configuration:

```typescript
// webpack.config.ts
import ReactSPABundle from "webpack-bundle-antd";

const config = new AntdBundle();
export default config.getWebpackConfig();
```
