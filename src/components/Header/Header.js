import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import MenuMobile from '../Menu/MenuMobile';
import NavItem from '../Menu/NavItem';
import { useSlugList } from '../../hooks/slugList';
import { buildNav } from '../../utils/buildNav';

export const Header = ({ blok }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document
      .querySelectorAll('body, html')
      .forEach((e) =>
        e.classList[isOpen ? 'add' : 'remove']('overflow-hidden')
      );
  }, [isOpen]);
  const navList = useSlugList();
  let navs = [];
  if (navList) {
    navs = buildNav(navList);
    console.log(navs);
    blok.nav_links.push(...navs);
    console.log(blok.nav_links);
  }
  const alt = `This is the logo and return to home button for the site`;
  let BrandContainer = null;

  if (blok.logo) {
    BrandContainer = (
      <img src={blok.logo} className="headerLogoSize" alt={alt} />
    );
  }
  return (
    <div
      className="container pt-6 pb-6 md:pt-6 sticky"
      style={{
        maxHeight: '120px',
        zIndex: 1000,
        // borderBottom: '1px solid #000',
      }}
    >
      <div className="flex justify-between items-center">
        <Link to="/">{BrandContainer}</Link>
        <div>
          <button
            className="sm:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <FaBars className="h-6 w-auto text-gray-900 fill-current mt-1 mr-3" />
          </button>
          <div className="hidden sm:block">
            {blok.nav_links.map((nav, key) => (
              <NavItem
                key={`menu_desktop_link${key}`}
                to={nav.link.url}
                activeClassName="borderPrimaryActive"
              >
                {nav.name}
              </NavItem>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <MenuMobile
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navs={blok.nav_links}
        />
      )}
    </div>
  );
};
