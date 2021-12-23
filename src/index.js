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

window.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('header').innerHTML = Nav();
  await Helper.displayData('a');
  await Utils.populate();
  handleClick();
  document.querySelector('form').addEventListener('submit', (e) => {
    helper.searchHandler(e, handleClick);
  });
  Helper.handleComments();
});
