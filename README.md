# anypoint-combobox

A combo box is a combination of a text field and the autocomplete element to provide an
UI of an input field with suggestions.

[![Published on NPM](https://img.shields.io/npm/v/@anypoint-web-components/anypoint-combobox.svg)](https://www.npmjs.com/package/@anypoint-web-components/anypoint-combobox)

[![tests](https://github.com/anypoint-web-components/anypoint-combobox/actions/workflows/deployment.yml/badge.svg)](https://github.com/anypoint-web-components/anypoint-combobox/actions/workflows/deployment.yml)

## Usage

### Installation

```sh
npm install --save @anypoint-web-components/anypoint-combobox
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@anypoint-web-components/anypoint-combobox/anypoint-combobox.js';

class SampleElement extends PolymerElement {
  render() {
    const suggestions = ['a', 'b', c];
    return html`
    <anypoint-combobox
      .source="${suggestions}"
      @value-changed="${this._valueHandler}">on/off</anypoint-combobox>
    `;
  }

  _valueHandler(e) {
    this.value = e.detail.value;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/anypoint-web-components/anypoint-combobox
cd anypoint-combobox
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests

```sh
npm test
```
