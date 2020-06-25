import { fixture, assert, html, aTimeout } from '@open-wc/testing';
import * as MockInteractions from '@polymer/iron-test-helpers/mock-interactions.js';
import '../anypoint-combobox.js';

describe('<anypoint-combobox>', () => {
  async function sourceFixture(source) {
    return (fixture(html`
      <anypoint-combobox .source="${source}" value="a"></anypoint-combobox>`));
  }

  describe('Selection', () => {
    const suggestions = ['Apple', 'Apricot', 'Avocado'];
    let element;

    beforeEach(async () => {
      element = await sourceFixture(suggestions);
    });

    it('closes the autocomplete on activate event', async () => {
      const node = element.shadowRoot.querySelector('anypoint-autocomplete');
      node.renderSuggestions();
      await aTimeout(0);
      const item = node.querySelector('anypoint-item');
      MockInteractions.tap(item);
      assert.isFalse(node.opened);
    });
  });

  describe('a11y', () => {
    async function a11yFixture(source) {
      return fixture(html`
        <anypoint-combobox
          .source="${source}"
          value="a"
        >
          <label slot="label">Test</label>
        </anypoint-combobox>`);
    }

    it('is accessible with value', async () => {
      const element = await a11yFixture();
      await assert.isAccessible(element);
    });
  });
});
