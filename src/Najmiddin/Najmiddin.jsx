import "../Najmiddin/Najmiddin.css";

function Najmiddin() {
  return (
    <div className="nWrapper">
      <div class="container">
        <div class="header__inner">
          <a href="/" class="header__logo">
            logo
          </a>
          <nav class="navbar">
            <ul class="nav">
              <li class="nav__item">
                <a href="#" class="nav__link">
                  About Us
                </a>
              </li>
              <li class="nav__item">
                <a href="courses.html" class="nav__link">
                  Courses
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Events
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Blog
                </a>
              </li>
              <li class="nav__item">
                <a href="#" class="nav__link">
                  Contacts
                </a>
              </li>
              <li class="nav__item">
                <button type="submit" class="nav__button">
                  Get consultation
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Najmiddin;
