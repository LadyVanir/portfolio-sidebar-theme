/**
 * Copyright 2025 Olivia Sarsfield
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from 'lit';
import { DDDSuper } from '@haxtheweb/d-d-d/d-d-d.js';

export class PortfolioPage extends DDDSuper(LitElement) {
  static get tag() {
    return "portfolio-page";
  }

  constructor() {
    super();
    this.title = "";
    this.pagenumber = null;
    this.active = false;
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      pagenumber: { type: Number },
      active: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return [
      super.styles, 
      css`
        :host {
          background-color: white;
          min-height: 100vh;
          display: block;
          scroll-snap-align: start;
        }
        
        h1 {
          text-align: center;
          font-family: Georgia, 'Times New Roman', Times, serif;
          color: #222;
          padding: 1rem 0;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .wrapper {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: calc(100vh - 6rem);
        }
        
        .content {
          width: 100%;
          text-align: center;
        }
      `
    ];
  }
  
  render() {
    return html`
      <h1>${this.title}</h1>
      <div class="wrapper">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    
    this.dispatchEvent(new CustomEvent('page-added', {
      bubbles: true,
      composed: true,
      detail: {
        value: this
      }
    }));
  }
}

customElements.define(PortfolioPage.tag, PortfolioPage);