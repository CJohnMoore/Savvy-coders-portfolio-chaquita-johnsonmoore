import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greet';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin);

var State = {
    'posts' : [],
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

function handleNavigation(params) {
    State.active = params.page;

    render(State); //eslint-disable-line
}

function render(state) {
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
`;

    greet();

    router.updatePageLinks();

}

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home'})
    .resolve());

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
            State.posts = posts;
            render(State);
    });
        
