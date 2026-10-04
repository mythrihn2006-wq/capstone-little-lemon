import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <header className={`site-header ${visible ? "header-visible" : "header-hidden"}`}>
      <div className="header-container">
        <Link className="brand" to="/" aria-label="Little Lemon home">
          <span className="brand-icon">🍋</span>
          <span>Little Lemon</span>
        </Link>

        <Nav />
      </div>
    </header>
  );
}

export default Header;