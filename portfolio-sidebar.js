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
        position: fixed;
        width: 270px;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1000;
      }

      .wrapper {
        width: 100%;
        height: auto;
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
        border-bottom: 6px solid black;
        position: fixed;
        left: 0;
        z-index: 1000;
      }

      .links {
        margin: 0 auto;
        padding: 10px 0;
        width: 100%;
        display: flex;
        justify-content: center;
      }
      
      ::slotted(a) {
        display: block;
        color: #a9a9a9;
        text-decoration: none;
        padding: 10px 20px;
        margin: 0 5px;
        font-size: large;
      }
      
      ::slotted(a:hover) {
        background-color: darkred;
      }
      
      ::slotted(a.active) {
        background-color: #800000;
        color: white;
      }
      
      @media (max-width: 750px) {
        .links {
          flex-direction: column;
        }
        
        ::slotted(a) {
          margin: 2px 0;
        }
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