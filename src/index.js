import './style.css';
import { Nav } from './components.js';
import Helper from './helper.js';

const helper = new Helper();

document.querySelector('header').innerHTML = Nav();

Helper.displayData('a');

document.querySelector('form').addEventListener('submit', helper.searchHandler);

// async function runIt() {
//   document.querySelector('#likes-btn').addEventListener('click', helper.LikeHandler);
// }

// runIt();
