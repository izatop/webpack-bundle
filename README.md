# Webpack

[![Build Status](https://travis-ci.org/izatop/webpack-bundle.svg?branch=master)](https://travis-ci.org/nobus/webpack-bundle)
[![Coverage Status](https://coveralls.io/repos/github/izatop/webpack-bundle/badge.svg)](https://coveralls.io/github/nobus/webpack-bundle)

The package helps to generate a webpack configuration and predefined
bundles/options or both.

## Getting starting

Install the package via npm or yarn

`yarn add --dev @izatop/webpack-bundle` 

or 

`npm i -D @izatop/webpack-bundle`

The package provide a simple API to define configuration. See a how-to example:

```typescript
// webpack.config.ts
import {Bundle, Options} from "@izatop/webpack-bundle";

const config = new Bundle();
config.set(
    new Options.Mode("production"),
    new Options.Module(/* module options */),
    new Options.Optimization(/* optimization options */),
    // ... another options
);

export default config.getWebpackConfig();

```

How to use TypeScript as a configuration language
you can read [here](https://webpack.js.org/configuration/configuration-languages/#typescript).

## API

Full API documentation now available in source code only. 

### Custom Options

You can use custom (predefined) options like this:

```typescript
// MySPAModule.ts
import {Options, Loaders} from "@izatop/webpack-bundle";

export class MySPAModule extends Options.Module {
    constructor() {
        super([
            new Loaders.TypeScriptLoader(),
            new Loaders.StyleLoader(),
            new Loaders.FileLoader(),
            new Loaders.UrlLoader(),
            // add some more loaders...
        ]);
    }
}

```

use:

```typescript
// webpack.config.ts
import {Bundle} from "@izatop/webpack-bundle";
import {MySPAModule} from "./MySPAModule";

const bundle = new Bundle(
    new MySPAModule()
);

export default bundle.getWebpackConfiguration();

```

### Custom Bundle

Write your bundles to your taste or like this:


```typescript
// MySPABundle.ts
import {Bundle, Options, Loaders} from "@izatop/webpack-bundle";

export class MySPABundle extends Bundle {
    constructor() {
        super(
            new Options.Mode("development"),
            new Options.Module([
                new Loaders.TypeScriptLoader(),
            ]),
            // some other options...
        );
    }
}

```

use:

```typescript
// webpack.config.ts

import {MySPABundle} from "./MySPABundle";

const bundle = new MySPABundle();
export default bundle.getWebpackConfiguration();

```
