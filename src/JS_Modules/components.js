import Logo from '../assets/images/mAZEFLIX.gif';
import Icon from '../assets/images/icon.svg';

export const Nav = () => `
  <nav>
    <div class="logo">
      <img src=${Logo} alt="site logo" />
    </div>
    <div class="form-container">
      <form>
        <input type="search" placeholder="search" id="search"/>
        <div>
          <button type="submit" id="submit-btn">Search <span class="spinner"></span></button>
        </div>
      </form>
    </div>
    <ul>
      <li>
        <a href="#" class="links active" data-content="#books">TV Shows</a>
      </li>
    </ul>
  </nav>
  `;

export const List = ({ show } = {}, likesNum = 0) => `
  <li>
    <div class="show-img">
      <img src=${show.image.medium} alt="show image">
      <div>
      <img src=${Icon} class="badge"/>
      </div>
    </div>
    <div class="tv-title">
      <p>${show.name}</p>
      <p><i class="fas fa-thumbs-up" id="likes-btn" data-id=${show.id}></i><span  data-id=${show.id} class="likes-num">${likesNum}</span> likes</p>
    </div>
    <button type="button" class="btn comment-btn" data-id=${show.id}>Comments</button>
  </li>
`;

export const Heading = (type, count = 5) => `
  <h1>Title ${type}: TV Shows(${count})</h1>
`;

export const Modal = (data) => `
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
<h3>Comments(0)</h3>
  <div class="comment-display"></div>
  <div>
    <h4>Add New Comment</h4>
  </div>
  <form id="form" class="flex direction">
    <input type="text" id="name" placeholder="Your Name">
    <textarea id="comment" maxlength="500" placeholder="Your Insight"></textarea>
    <button type="submit" id="adding">Submit</button>
  </form>
</div>
</div>
`;

export const Comment = (item) => `
  <div class="commenting">
    <p class="date">${item.creation_date}</p>
    <p>${item.username} : ${item.comment}</p>
  </div>
`;