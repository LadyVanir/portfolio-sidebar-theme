/**
 * Copyright 2025 Olivia Sarsfield
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PortfolioSidebar extends DDDSuper(LitElement) {
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
        height: 100%;
      }

      .wrapper {
        width: 270px;
        height: 100vh;
        top: 0;
        background: #222;
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
      }

      .links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }

      ::slotted(a), ::slotted(button) {
        text-decoration: none;
        color: white;
        padding: 1.5em;
        display: block;
        cursor: pointer;
        font-weight: 500;
        letter-spacing: 1px;
        background: none;
        border: none;
        font-size: 1em;
        text-align: center;
        transition: background 0.3s;
        width: 100%;
        box-sizing: border-box;
      }

      ::slotted(a:hover), ::slotted(button:hover),
      ::slotted(a.active), ::slotted(button.active) {
        background: #444;
      }

      @media (max-width: 768px) {
        .wrapper {
          width: 100%;
          height: auto;
        }

        .links {
          flex-direction: row;
          overflow-x: auto;
          justify-content: flex-start;
        }

        ::slotted(a), ::slotted(button) {
          padding: 1em;
          white-space: nowrap;
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

customElements.define(PortfolioSidebar.tag, PortfolioSidebar);