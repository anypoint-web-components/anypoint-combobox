import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@advanced-rest-client/arc-demo-helper/arc-interactive-demo.js';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox.js';
import '@anypoint-web-components/anypoint-styles/colors.js';
import '../anypoint-combobox.js';

const suggestions = ['Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya',
  'Cloudberry', 'Coconut', 'Cranberry', 'Damson', 'Date', 'Dragonfruit',
  'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry',
  'Grape', 'Grapefruit', 'Guava', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
  'Jambul', 'Jujube', 'Juniper berry', 'Kiwi fruit', 'Kumquat', 'Lemon',
  'Lime', 'Loquat', 'Lychee', 'Mango', 'Marion berry', 'Melon', 'Miracle fruit',
  'Mulberry', 'Nectarine', 'Olive', 'Orange'
];

class DemoPage extends ArcDemoPage {
  constructor() {
    super();
    this.initObservableProperties([
      'outlined',
      'compatibility',
      'disabled'
    ]);
    this._componentName = 'anypoint-combobox';

    this.demoStates = ['Filles', 'Outlined', 'Anypoint'];

    this._demoStateHandler = this._demoStateHandler.bind(this);
    this._toggleMainOption = this._toggleMainOption.bind(this);
  }

  _toggleMainOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _demoStateHandler(e) {
    const state = e.detail.value;
    this.outlined = state === 1;
    this.compatibility = state === 2;
  }

  _demoTemplate() {
    const {
      demoStates,
      outlined,
      compatibility,
      darkThemeActive,
      disabled
    } = this;
    return html`
      <section class="documentation-section">
        <h3>Interactive demo</h3>
        <p>
          This demo lets you preview the combo box element with various
          configuration options.
        </p>
        <arc-interactive-demo
          .states="${demoStates}"
          @state-chanegd="${this._demoStateHandler}"
          ?dark="${darkThemeActive}"
        >
          <anypoint-combobox
            slot="content"
            ?compatibility="${compatibility}"
            ?outlined="${outlined}"
            ?disabled="${disabled}"
            .source="${suggestions}"
          >
            <label slot="label">Fruit name</label>
          </anypoint-combobox>

          <label slot="options" id="mainOptionsLabel">Options</label>
          <anypoint-checkbox
            aria-describedby="mainOptionsLabel"
            slot="options"
            name="disabled"
            @change="${this._toggleMainOption}"
          >Disabled</anypoint-checkbox>
        </arc-interactive-demo>
      </section>
    `;
  }

  _introductionTemplate() {
    return html`
      <section class="documentation-section">
        <h3>Introduction</h3>
        <p>
          This component is based on Material Design switch and adjusted for
          Anypoint platform components.
        </p>
        <p>
          Anypoint web components are set of components that allows to build
          Anypoint enabled UI in open source projects.
        </p>
      </section>
    `;
  }

  contentTemplate() {
    return html`
      <h2>Anypoint combo box</h2>
      ${this._demoTemplate()}
      ${this._introductionTemplate()}
    `;
  }
}

const instance = new DemoPage();
instance.render();
window._demo = instance;
