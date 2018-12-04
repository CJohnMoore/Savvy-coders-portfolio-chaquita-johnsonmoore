import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greet';
import Header from './src/Header';
import Navigation from './src/Navigation';

var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to My Savvy Coders Portfolio Project',
        'links': ['blog', 'contact', 'projects']
    },
    'blog': {
        'title': 'Go on and click - you know you want to.',
        'links': ['home', 'contact', 'projects']
    },
    'contact': {
        'title': 'Get in touch with me!',
        'links': ['home', 'blog', 'projects']
    },
    'projects': {
        'title': 'Look upon my works!',
        'links': ['home', 'blog', 'contact']
    }
};
var root = document.querySelector('#root');

function handleNavigation(event) {
    event.preventDefault();

    State.active = event.target.textContent;
    render(State); //eslint-disable-line
}

function render(state) {
    var links;

    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
`;

    greet();

    links = document.querySelectorAll('#navigation a');

    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click',
            handleNavigation
        );
       
    }
    
}
render(State);