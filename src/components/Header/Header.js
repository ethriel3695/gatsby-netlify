import React, { useState } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaBars } from 'react-icons/fa';
import { useBrandData } from '../../hooks/brandData';
import MenuMobile from '../Menu/MenuMobile';
import NavItem from '../Menu/NavItem';
import { useSlugList } from '../../hooks/slugList';
import { buildNav } from '../../utils/buildNav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = useBrandData();
  const navList = useSlugList();
  let navs = [];
  if (navList) {
    navs = buildNav(navList);
  }
  let brandLogo = false;
  if (data) {
    brandLogo = data.brandLogo;
  }
  const alt = `This is the logo and return to home button for the site`;
  let logo = null;
  let BrandContainer = null;

  if (brandLogo) {
    if (!brandLogo.childImageSharp && brandLogo.extension === 'svg') {
      logo = brandLogo.publicURL;
      BrandContainer = <img src={logo} className="headerLogoSize" alt={alt} />;
    } else {
      logo = brandLogo.childImageSharp.gatsbyImageData;
      BrandContainer = (
        <GatsbyImage image={logo} className="headerLogoSize" alt={alt} />
      );
    }
  } else {
    brandLogo = false;
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
            <FaBars className="h-6 w-auto text-gray-900 fill-current -mt-1" />
          </button>
          <div className="hidden sm:block">
            {navs.map((nav, key) => (
              <NavItem
                key={`menu_desktop_link${key}`}
                to={nav.route}
                activeClassName="borderPrimaryActive"
              >
                {nav.label}
              </NavItem>
            ))}
          </div>
        </div>
      </div>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} navs={navs} />
    </div>
  );
};

export default Header;
