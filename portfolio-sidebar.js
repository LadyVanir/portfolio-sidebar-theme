import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';
import { I18NMixin } from '@haxtheweb/i18n-manager/lib/I18NMixin.js';

export class PortfolioSidebar extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "portfolio-sidebar";
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .wrapper {
        width: 300px;
        height: 100vh;
        top: 0;
        overflow-x: hidden;
        background: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        url(https://wallpaperaccess.com/full/1153069.jpg);
        background-color: black;
        display: flex;
        text-align: center;
        border-right: 10px solid black;
        position: fixed;
        left: 0;
      }

      .links {
        margin: auto;
        width: 100%;
      }
      
      ::slotted(a) {
        display: block;
        color: darkgray;
        text-decoration: none;
        padding: 15px 0;
        margin: 10px 0;
        font-size: 16px;
      
      }
      
      ::slotted(a:hover) {
        background-color: darkgray;
      }
      
      ::slotted(a.active) {
        background-color: darkred;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="links">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(PortfolioSidebar.tag, PortfolioSidebar);