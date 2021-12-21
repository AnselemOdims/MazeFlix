import Logo from './assets/images/mAZEFLIX.gif';

const Nav = (num = 6) => `
  <nav>
    <div class="logo">
      <img src=${Logo} alt="site logo" />
    </div>
    <div>
      <form>
        <input type="search" placeholder="search"/>
        <button type="submit">Search</button>
      </form>
    </div>
    <ul>
      <li>
        <a href="#" class="links active" data-content="#books">TV Shows(${num})</a>
      </li>
    </ul>
  </nav>
  `;

export default Nav;