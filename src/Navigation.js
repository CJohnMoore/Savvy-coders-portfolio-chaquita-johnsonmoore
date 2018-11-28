export default function Navigation() {
    return `

<div id="navigation">

        <ul class="container">
            <li>
                <a href="./blog">Blog</a>
            </li>
            <li>
                <a href="./contact">Contact</a>
            </li>
            <li>
                <a href="./projects">Projects</a>
                <ul class="dropdown">
                    <li>first</li>
                    <li>second</li>
                    <li>third</li>
                </ul>
            </li>
            <li>fourth</li>
            <li>fifth</li>
            <li>sixth</li>
        </ul>

    </div>
`;
}