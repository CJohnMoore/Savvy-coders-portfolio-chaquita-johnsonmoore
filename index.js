import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import Greet from './src/Greet';

var state = {
    'title': 'Welcome to My Savvy Coders Portfolio Project'
};


document.querySelector('#root').innerHTML = `
${Content(state)}
${Footer(state)}
${Navigation(state)}
${Header(state)}
    `;



//var title = document.querySelector('h1');

//function greet(){
  //  if(!userName){
    //    userName = prompt('What is your name, for real this time?');

      //  greet();
    //}
    //else{
      //  title.textContent += `, <em>${userName}</em>`;
    //}
//};

// userName = prompt('What is your name?');
greet();