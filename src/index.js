import './assets/CSS/style.css';
import { Nav } from './JS_Modules/components.js';
import Helper from './JS_Modules/helper.js';
import Utils from './JS_Modules/utils.js';

// Create an instance of the Helper class
const helper = new Helper();

// function to handle click
function handleClick() {
  document.querySelectorAll('#likes-btn').forEach((btn) => {
    btn.addEventListener('click', Helper.LikeHandler);
  });
}

const index = Math.floor(Math.random() * 4);
const items = ['a', 'b', 'c', 'd', 'e'];

window.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('header').innerHTML = Nav();
  await Helper.displayData(items[index]);
  await Utils.populate();
  handleClick();
  document.querySelector('form').addEventListener('submit', (e) => {
    helper.searchHandler(e, handleClick);
  });
  Helper.handleComments();
});
