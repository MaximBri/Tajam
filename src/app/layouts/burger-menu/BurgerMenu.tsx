import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { headerLinks } from '../header/model/headerLinks';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.burger}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <section
        className={`${styles.burger__menu} ${isOpen ? styles['burger__menu--open'] : ''}`}
      >
        <button onClick={() => setIsOpen(false)} className={styles['burger__menu-close']}>
          <div></div>
          <div></div>
        </button>
        <nav className={styles['burger__menu-list']}>
          {headerLinks.map((item, index) => {
            return (
              <ScrollLink
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                to={item.path}
                key={index}
              >
                {item.name}
              </ScrollLink>
            );
          })}
        </nav>
      </section>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className={styles['burger__bg-close']}
        ></div>
      )}
    </>
  );
};
