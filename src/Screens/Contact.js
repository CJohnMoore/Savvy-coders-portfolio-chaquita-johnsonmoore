import {html} from 'lit-html';
export default function Contact(state) {
    return html`
     <div id="content">
     <div class="container">
        ${Screens[capitalize(state.active)](state)}
    </div>
    </div>
    `;

}