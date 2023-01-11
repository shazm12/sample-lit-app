import {LitElement, html, css, CSSResultGroup, PropertyValueMap, PropertyValues} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {mainStyles} from './styles';
import './hello-world-2';
import {choose} from 'lit/directives/choose.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {

  static styles = [mainStyles]

  @state()
  counter  = 0;
  
  @state()
  section = 'home';


  _onClick() {
    this.counter += 1;
  }

  _changePage() {
    this.section = 'next';
  }

  protected willUpdate(_changedProperties: PropertyValues<this>): void {
    console.log(this.section);   
  }
  

  render() {
    
    return html`
    ${choose(this.section,
      [
        ['next', () => html`<hello-world-2 .section=${this.section} />`]
      ],
      () => html`

        <div class="container">
          <h1>Hello World </h1>
          <button @click=${this._onClick}>Click To Increase the Count</button>
          <p>Current count is : ${this.counter}</p>
          <button @click=${this._changePage}>Go to next page</button>
        </div>
      `  
      )}
    `

  }
}

