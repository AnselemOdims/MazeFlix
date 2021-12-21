import Logo from './assets/images/mAZEFLIX.gif';

export const Nav = ({ num = 6 } = {}) => `
  <nav>
    <div class="logo">
      <img src=${Logo} alt="site logo" />
    </div>
    <div class="form-container">
      <form>
        <input type="search" placeholder="search" id="search"/>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
    <ul>
      <li>
        <a href="#" class="links active" data-content="#books">TV Shows(${num})</a>
      </li>
    </ul>
  </nav>
  `;

export const List = ({ show } = {}) => `
  <li>
    <div>
      <img src=${show.image.medium} alt="show image">
    </div>
    <div class="tv-title">
      <p>${show.name}</p>
      <p data-id=${show.id}><i class="far fa-thumbs-up"></i> 2 likes</p>
    </div>
    <button type="button" class="btn comment-btn" data-id=${show.id}>Comments</button>
  </li>
`;
