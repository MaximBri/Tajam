import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

import { headerLinks } from './model/headerLinks';
import logoSvg from '/images/main/Logo.svg';
import styles from './Header.module.scss';
import { routes } from '../routes/routes';
import { BurgerMenu } from '../burger-menu/BurgerMenu';

export const Header = () => {
  const [active, setActive] = useState<number>(0);

  const onLinkClick = (index: number, path: string) => {
    setActive(index);
    window.location.hash = path;
  };

  return (
    <header id="home" className={styles.header}>
      <Link className={styles.header__logo} to={routes.home}>
        <img src={logoSvg} alt="logo" />
      </Link>
      <nav className={styles.header__nav}>
        {headerLinks.map((link, index) => {
          return (
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to={link.path}
              onClick={() => onLinkClick(index, link.path)}
              className={styles['header__nav-item']}
              key={index}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </nav>
      <BurgerMenu />
    </header>
  );
};
