import "./header.css";

export function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">Frontend-Production</div>
        <div className="header__search">
          <input
            className="header__search-input"
            placeholder="Search or type a command"
          />
        </div>
      </div>
    </div>
  );
}
