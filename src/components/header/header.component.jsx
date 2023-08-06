import "./header.styles.css";

function Header() {
  return (
    <header>
      <h1>Patient List</h1>
      <nav className="nav-container">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sriniv2s2n/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sriniv2s2n/patient-list"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
