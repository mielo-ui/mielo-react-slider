# Mielo React Slider

Slider react component, part of Mielo UI.
This module is wrapper around `react-range-slider-input`.

## Quick install

Mielo is constantly in development! Try it out now:

### NPM

```sh
npm install mielo mielo-react-slider
```

**or**

### Yarn

```sh
npm install mielo mielo-react-slider
```

### Import

After installation, you can import the CSS file into your project using this snippet:

```sh
@import 'mielo/css/mielo.css'
```

And usage react components like

``` typescript
import { Slider } from "mielo-react-slider"

<Slider label="Success" accent="success" />
```

## Browser Support

Mielo is compatible with **recent** versions of:

- Chrome
- Edge
- Firefox
- Opera
- Safari

Internet Explorer is not supported.

## Documentation
Browse the [online documentation here.](#todo)

# Development
For build library from source:

``` sh
git clone https://github.com/friktor/mielo-react-slider
cd mielo-react-slider

npm install # or "yarn"
npm run fmt # format & linting components
npm build # build module library with .d.ts
```