import './style.css';
import { Nav } from './components.js';
import Helper from './helper.js';
import Utils from './utils.js';

const helper = new Helper();

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
});
