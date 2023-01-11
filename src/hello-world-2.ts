import {LitElement, html, css, CSSResultGroup} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {mainStyles} from './styles';
import './counter';
import './hello-world';

@customElement('hello-world-2')
export class HelloWorld2 extends LitElement {

  static styles = [mainStyles]

  @state()
  counter = 0
  
  _onIncreaseEvent() {
    this.counter +=1;
  }

  _goBack() {
    this.section = 'home';
    window.location.reload();
  }

  render() {
    return html`
      <div class="container">
        <h1>Array of Buttons</h1>
        <p>Number: ${this.counter} </p>  
        <counter-comp @increase=${this._onIncreaseEvent}>
        </counter-comp>
        <counter-comp @increase=${this._onIncreaseEvent}>
        </counter-comp>
        <button class='back-btn' @click=${this._goBack}>Go back <- </button>
      </div>
    `;
  }
}

