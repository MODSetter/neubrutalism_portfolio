import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-6">
      <aside className="items-center grid-flow-col">
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/MODSetter/neubrutalism_portfolio"
        >
          Neubrutalism Portfolio By Rohan Verma
        </Link>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <p>Copyright © 2024 - All right reserved</p>
      </nav>
    </footer>
  );
};

export default Footer;
