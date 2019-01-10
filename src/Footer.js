import {html} from 'lit-html';
export default function Footer() {
    return html`
<div id="footer">
    <div class="container">
        <h3>Contact Information</h3>
        <ul>
            <li class="emphasis">
            <i class="fab fa-github"></i>
            GitHub: <a href="https://github.com/CJohnMoore">CJohnMoore</a>
        </li>
        <li id="middle">
            <i class="fab fa-twitter"></i>
            Twitter: <a href="https://twitter.com/superior_taster">@superior_taster</a>
        </li>
        <li>
            <i class="fas fa-paper-plane"></i>
            EMail: <a href="mailto:chaquita@cjmdevelopments.com">chaquita@cjmdevelopments.com</a>
        </li>
    </ul>
    </div>
</div>
`;
}