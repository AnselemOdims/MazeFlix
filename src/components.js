const Header = () => {
  return `
  <nav>
      <div class="logo">
          <img src="book-reader-solid.svg" alt="site logo" />
          <p>Awesome Books</p>
        </div>
        <ul>
          <li>
            <a href="#" class="links active" data-content="#books">Lists</a>
          </li>
          <li>
            <a href="#" class="links" data-content="#add-book">Add New</a>
          </li>
          <li><a href="#" class="links" data-content="#contact">Contact</a></li>
        </ul>
      </nav>
  `
}