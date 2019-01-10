import Navigation from './src/Navigation';
import Navigo from 'navigo';
import Store from './src/Store';
import {html, render} from 'lit-html;'

var router = new Navigo(window.location.origin);

function App(state) {
    return html `
        ${Navigation(state)}
        ${Header(state)}
        ${Content(state)}
        ${Footer(state)}    
        `;
}

function start(state) {
    render(App(state), root);
}

store.addListener(start);
store.addListener(() => router.updatePageLinks());

router
    .on('/:page', handleNavigation)
    .on('/', () => handleNavigation({ 'page': 'home' }))
    .resolve ();

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
            store.dispatch((state) => {
                state.posts = posts;

                return state; 
            });
        });