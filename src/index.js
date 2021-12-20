import './style.css';
import Avatar from './Avatar.jpg';
import helper from './helper';

function component(){
  let div = document.createElement('div')
  let element = document.createElement('h1');
  element.textContent = 'Hello World!, still keeping'
  div.append(element)
  let img = document.createElement('img');
  img.src = Avatar;
  div.append(img)
  let btn = document.createElement('button');
  btn.addEventListener('click', helper)
  btn.innerHTML = 'Click Me!';
  div.append(btn)
  return div
}

document.querySelector('body').append(component())