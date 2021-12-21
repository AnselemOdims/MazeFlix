import Icon from './assets/images/download_120262.png';
import './style.css';
import { Nav } from './components.js';
import Helper from './helper.js';
import Icon from './assets/images/download_120262.png';
import Utils from './utils.js';

const helper = new Helper();

function handleClick() {
  document.querySelectorAll('#likes-btn').forEach((btn) => {
    btn.addEventListener('click', Helper.LikeHandler);
  });
}

Helper.displayData('a');

document.querySelector('form').addEventListener('submit', helper.searchHandler);

const icons = new Image();
icons.src = Icon;


window.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('header').innerHTML = Nav();
  await Helper.displayData('a');
  await Utils.populate();
  handleClick();
  document.querySelector('form').addEventListener('submit', (e) => {
    helper.searchHandler(e, handleClick);
  });
});

setTimeout(() => {
  const buttons = document.querySelectorAll('.comment-btn');
  buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
      const args = e.target.getAttribute('data-id');
      Helper.getInfo(args)
        .then((data) => {
          const divs = document.querySelector('.section');
          divs.style.display = 'block';
          divs.innerHTML = `
        <div class="top-section">
          <span class="close">&times;</span>
          <div class="img-section">
            <img src="${data.image.medium}" alt="" class="main-img">
            <button class=""><p>Download</p><img src="${icons.src}" alt="Refresh_icon"></button>
          </div>
          <div class="details">
            <h3>${data.name}</h3>
            <p>Year: ${data.ended}</p>
            <p>${data.genres}</p>
            <p>Summary: ${data.summary}</p>
            <p>Language: ${data.language}</p>
            <p>Rating: ${data.rating.average}</p>
            <p>Premeired: ${data.premiered}</p>
          </div>
        </div>
        <div class="comment-section">
          <h2>Comments</h2>
          <div class="comment-display">
            <div class="flex commenting"><p>03/11/2021</p><p>Alex: I'd Love to buy it as soon as I can</p></div>
            <div class="flex commenting"><p>03/12/2021</p><p>Mia: Nice movie</p></div>
          </div>
          <form id="form" class="flex direction">
            <input type="text" id="name" placeholder="Your Name">
            <textarea id="comment" maxlength="500" placeholder="Your Insight"></textarea>
            <button type="submit" id="adding">Submit</button>
          </form>
        </div>`;

          const span = document.querySelector('.close');
          const forms = document.getElementById('form');
          const add = document.getElementById('adding');
          const space = document.querySelector('.comment-display');

          span.addEventListener('click', () => {
            divs.style.display = 'none';
            divs.innerHTML = '';
          });

          forms.addEventListener('submit', (event) => {
            event.preventDefault();
          });

          add.addEventListener('click', () => {
            const name = document.getElementById('name');
            const score = document.getElementById('comment');
            if ((name.value !== '') && (score.value !== '')) {
              const next = document.createElement('div');
              next.setAttribute('class', 'flex commenting');
              next.innerHTML = `<p>03/11/2021</p><p>${name.value}: ${score.value}</p>`;
              space.append(next);

              forms.reset();
            }
          });
        });
    });
  });
}, 1000);
