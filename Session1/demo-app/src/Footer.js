import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Nguyễn Trần Hoàng Anh. All rights reserved.</p>
      <p>Happy Hacking! 🚀</p>
    </footer>
  );
}

export default Footer;
