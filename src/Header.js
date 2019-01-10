import {html} from 'lit-html';

export default function Header(state) {
    return html `
</div>
    <div id="header">
    <div class="container">
    <h1>${state[state.active].title}</h1>
    <h2>My name is Chaquita Johnson-Moore</h2>
    <img src="https://media.licdn.com/dms/image/C4E03AQHENfyA2yaVLQ/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=FDnMUfG-NrXQvKyke1bSTd8YYzOD4fDKGGkbIm_a_ow"
        alt="its me">
    </div>
    </div>
`;
}