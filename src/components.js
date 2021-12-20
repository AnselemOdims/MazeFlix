import Logo from './assets/images/mAZEFLIX.gif';

const Nav = () => `
  <nav>
    <div class="logo">
        <img src=${Logo} alt="site logo" />
      </div>
      <ul>
        <li>
          <a href="#" class="links active" data-content="#books">TV Shows</a>
        </li>
        <li>
          <a href="#" class="links" data-content="#add-book">Series</a>
        </li>
        <li><a href="#" class="links" data-content="#contact">Movies</a></li>
      </ul>
  </nav>
  `;

export default Nav;