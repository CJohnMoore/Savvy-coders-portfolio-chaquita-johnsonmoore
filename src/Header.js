export default function Header(state) {
    return `
</div>
    <div id="header">
    <div class="container">
    <h1>${state[state.active].title}</h1>
    <h2>My name is Chaquita Johnson-Moore</h2>
    <img src="https://media.licdn.com/dms/image/C4E03AQGP8jmsPlAkpw/profile-displayphoto-shrink_200_200/0?e=1546473600&v=beta&t=D5VOPK6zN83RiHHKX2d2I-_QZSx_zebaaAKOqa4w3Sw"
        alt="its me">
    </div>
    </div>
`;
}