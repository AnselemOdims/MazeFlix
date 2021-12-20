import Logo from './assets/images/mAZEFLIX.gif';

const Nav = (num = 6) => `
  <nav>
    <div class="logo">
        <img src=${Logo} alt="site logo" />
      </div>
      <ul>
        <li>
          <a href="#" class="links active" data-content="#books">TV Shows(${num})</a>
        </li>
        <li>
          <a href="#" class="links" data-content="#add-book">Series</a>
        </li>
        <li><a href="#" class="links" data-content="#contact">Movies</a></li>
      </ul>
  </nav>
  `;

export default Nav;