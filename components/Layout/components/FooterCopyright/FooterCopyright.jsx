import React from "react";

export default function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <p className="footer-company">
        All Rights Reserved. &copy; {new Date().getFullYear()} <a href="#"></a> Design By :
        <a href="https://www.euler-technology.com">Euler technology</a>
      </p>
    </div>
  );
}
