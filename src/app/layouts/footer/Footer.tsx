import { Link } from 'react-router-dom';

import logo from '/images/main/Logo.svg';
import sotSvg from '/images/footer/dot.svg';
import telSvg from '/images/footer/tel.svg';
import styles from './Footer.module.scss';
import { FooterForm } from './ui/FooterForm';
import { linksLinks } from './model/linksList';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__col1}>
          <Link className={styles.footer__logo} to="/">
            <img src={logo} alt="logo" />
          </Link>
          <p className={styles['footer__col1-text']}>
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh elit. Duis sed odio sit amet auctror a ornare odio non
            mauris vitae erat in elit
          </p>
        </div>
        <div className={styles.footer__col2}>
          <h3 className={styles['footer__col2-title']}>Our studio</h3>
          <div className={styles['footer__col2-item']}>
            <img src={sotSvg} alt="dot" />
            <p>
              Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres -
              Jakarta Barat 11480 - Indonesia
            </p>
          </div>
          <div className={styles['footer__col2-item']}>
            <img src={telSvg} alt="tel" />
            <a href="tel:+622122243333">(+62) 21-2224 3333</a>
          </div>
        </div>
        <div className={styles.footer__col3}>
          <h3 className={styles['footer__col3-title']}>stay in touch</h3>
          <FooterForm />
          <nav className={styles.footer__links}>
            {linksLinks.map((link, index) => {
              return (
                <Link
                  className={styles['footer__links-item']}
                  to={link.path}
                  key={index}
                >
                  <img
                    src={`/images/footer/${link.name}.svg`}
                    alt="social network"
                  ></img>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <nav className={styles.footer__bottom}>
        <div className={styles['footer__bottom-links']}>
          <Link to="#">Help</Link>
          <Link to="#">TERMS & CONDITION</Link>
          <Link to="#">Privacy</Link>
        </div>
        <span className={styles['footer__bottom-copyright']}>Copyright © 2015 - Tajem Creative</span>
      </nav>
    </footer>
  );
};
