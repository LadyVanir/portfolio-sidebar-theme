import {LitElement, html, css} from 'lit';
import {DDDSuper} from @haxtheweb/d-d-d/d-d-d.js';

export class PortfolioPage extends DDDSuper(LitElement) {
    static get tag()
    {
        return
    }
    constructor()
    {
        super();
        this.title="";
        this.pagenumber=null;
    }

    static get properties()
    {
        return {
            ...super.properties,
            title: {type: String},
            pagenumber: {type: Number}
        };
    }

    static get styles()
    {
        return [super.styles, css`]
        :host{
            background-color: var(--ddd-theme-accent);
            height: 100vh;
            display: block;

        }
        h1{
            text-align: right;
            font-family: var(--ddd-font-navigation);
            color: rgb(204, 204, 253);
            background-image: linear-gradient(to right, rgba(122, 43, 73, 0), rgba(40,0,100,0.264),
            rgb(84, 43, 122));
        }
        .wrapper{
            padding: 40px;
    
        }
        `];
    }
    render()
    {
        return html`
       <h1>${this.title}</h1>
       <div class="wrapper">
        <slot></slot>
       </div>`;
    }

    firstUpdated(changedProperties)
    {
        if(super.firstUpdated)
        {
            if(super.firstUpdated)
            {
                super.firstUpdated(changedProperties);
            }
            this.dispatchEvent(new CustomEvent(`page-added`,
                {
                    bubbles:true,
                    composed:true, 
                    detail:{
                        page:this
                    }
                }
            ))
        }
    }
