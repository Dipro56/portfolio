import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-blue-200">
      <div className="lg:text-3xl sm:text-xl font-semibold  navbar-name">
        <Link href="/">Sadat Shahriar Bari</Link>
      </div>
      <div className="navbar-item">
        <ul className="navbar-item">
          <li className="list-item-common-property ">
            <Link href="#about">About</Link>
          </li>
          <li className="list-item-common-property">
            <Link href="#education">Education</Link>
          </li>
          <li className="list-item-common-property">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="list-item-common-property">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="list-item-common-property">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="list-item-common-property">
            <Link href="#extra-curricular">Co-curricular</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
