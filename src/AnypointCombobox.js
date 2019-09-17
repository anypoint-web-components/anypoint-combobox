import { html, css } from 'lit-element';
import { AnypointInput } from '@anypoint-web-components/anypoint-input/src/AnypointInput.js';
import '@anypoint-web-components/anypoint-autocomplete/anypoint-autocomplete.js';
/**
 * `anypoint-combobox`
 *
 * @customElement
 * @demo demo/index.html
 * @memberof UiElements
 */
export class AnypointCombobox extends AnypointInput {
  static get styles() {
    return [
      AnypointInput.styles,
      css`
      .ac-wrapper {
        position: relative;
        height: inherit;
      }
      `
    ];
  }

  static get properties() {
    return {
      /**
       * List of suggestions to display.
       * If the array items are strings they will be used for display a suggestions and
       * to insert a value.
       * If the list is an object the each object must contain `value` and `display`
       * properties.
       * The `display` property will be used in the suggestions list and the
       * `value` property will be used to insert the value to the referenced text field.
       */
      source: { type: Array }
    };
  }

  _onActivate() {
    const node = this.shadowRoot.querySelector('anypoint-autocomplete');
    node._opened = false
  }

  firstUpdated() {
    super.firstUpdated();
    // this is required for autocomplete to set up the
    // targer as `inputElement` is compyted getter.
    this.requestUpdate();
  }

  render() {
    return html`
    <div class="ac-wrapper">
      ${super.render()}
      <anypoint-autocomplete
        .target="${this}"
        .source="${this.source}"
        .compatibility="${this.compatibility}"
        @activate="${this._onActivate}"
        noTargetControls
        openonfocus></anypoint-autocomplete>
    </div>
    `;
  }
}
