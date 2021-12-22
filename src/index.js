import Icon from './assets/images/download_120262.png';
import './style.css';
import { Nav } from './components.js';
import Helper from './helper.js';
import Utils from './utils.js';
import Comments from './comment.js';

const helper = new Helper();

function handleClick() {
  document.querySelectorAll('#likes-btn').forEach((btn) => {
    btn.addEventListener('click', Helper.LikeHandler);
  });
}

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

  const buttons = document.querySelectorAll('.comment-btn');
  buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
      const args = e.target.getAttribute('data-id');
      Helper.getInfo(args)
        .then((data) => {
          const modal = document.querySelector('.modal');
          modal.style.display = 'block';
          modal.innerHTML = `
          <div class="section">
            <span class="close">&times;</span>
          <div class="top-section">
            <div class="img-section">
              <img src="${data.image.medium}" alt="" class="main-img">
              <div class="download-btn">
              <button type="button">Download <i class="fas fa-download"></i></button>
              </div>
            </div>
          <div class="details">
            <h3>${data.name}</h3>
            <div class="d-flex genre">
              <p>Genre: <span class="d-bold">${data.genres}</span></p>
              <p>Year: <span class="d-bold">${data.ended ?? 'unknown'}</span></p>
            </div>
            <div class="summary">
              <span>Summary:</span>
              <p>${data?.summary?.slice(0, 200) ?? 'brief'}...</p>
            </div>
            <div class="d-flex genre">
              <p>Language: <span class="d-bold">${data.language}</span></p>
              <p>Rating: <span class="d-bold">${data.rating.average ?? 'unknown'}</span></p>
            </div>
            <p>Premeired: <span class="d-bold">${data.premiered}</span></p>
          </div>
        </div>
        <div class="comment-section">
          <h3>Comments</h3>
          <div class="comment-display">
          </div>
          <div>
            <h4>Add New Comment</h4>
          </div>
          <form id="form" class="flex direction">
            <input type="text" id="name" placeholder="Your Name">
            <textarea id="comment" maxlength="500" placeholder="Your Insight"></textarea>
            <button type="submit" id="adding">Submit</button>
          </form>
          </div>
        </div>`;

          const space = document.querySelector('.comment-display');

          Utils.displayComments(args)
            .then((data) => {
              data.forEach((element) => {
                const next = document.createElement('div');
                next.setAttribute('class', 'flex commenting');
                next.innerHTML = `<p>${element.creation_date} <p>${element.username} : ${element.comment}</p>`;
                space.append(next);
              });
            });

          const span = document.querySelector('.close');
          const forms = document.getElementById('form');
          const add = document.getElementById('adding');

          span.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.innerHTML = '';
          });

          forms.addEventListener('submit', (event) => {
            event.preventDefault();
          });

          add.addEventListener('click', () => {
            const name = document.getElementById('name');
            const score = document.getElementById('comment');
            if ((name.value !== '') && (score.value !== '')) {
              Comments.postComment(args, name.value, score.value)
                .then();
              const next = document.createElement('div');
              next.setAttribute('class', 'commenting');
              next.innerHTML = `<p>03/11/2021</p><p>${name.value}: ${score.value}</p>`;
              space.append(next);

              forms.reset();
            }
          });
        });
    });
  });
});
