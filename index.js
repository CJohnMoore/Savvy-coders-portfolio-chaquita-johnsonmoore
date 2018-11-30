import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import Greet from './src/Greet';

var links;
var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to My Savvy Coders Portfolio Project'
    },
    'blog': {
        'title': 'Go on and click - you know you want to.'
    },
    'contact': {
        'title': 'Get in touch with me!'
    },
    'projects': {
        'title': 'Look upon my works!'
    }
};
var root = document.querySelector('#root');

function handleNavigation(event) {
    event.preventDefault();
    State.active = event.target.textContent;
    render(State); //eslint-disable-line
}

function render(State) {
    var links;

    root.innerHTML = `
    ${Content(state)}
    ${Footer(state)}
    ${Navigation(state)}
    ${Header(state)}
`;

    greet();

    links = document.querySelectorAll('#navigation a');

    function handleNavigation(event) {
        event.preventDefault();
        console.log(event.target.textContent);
    }
    links[0].addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            console.log(event.target.textContent);
        }
    );
    links[1].addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            console.log(event.target.textContent);
        }
    );
    links[2].addEventListener(
        'click',
        (event) => {
            event.preventDefault();
            console.log(event.target.textContent);
        }
    );
}
render(state);