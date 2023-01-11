import {LitElement, html, css, CSSResultGroup} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {mainStyles} from './styles';

@customElement('counter-comp')
export class Counter extends LitElement {

  static styles = [mainStyles]

  _onPress() {
    this.dispatchEvent(new Event("increase"));
  }

  render() {
    return html`
      <button @click=${this._onPress} class="counter-btn">
        Click Here To Increase
     </button>
      
    `;
  }
}
