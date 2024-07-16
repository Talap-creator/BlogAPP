import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../img/Logo.png';
import Icons from '../../img/Icons.png';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.Footer}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-col">
          <img src={Logo} alt="Logo" className="mt-8 scale-75 select-none" />
          <div className="mt-12 flex justify-between w-[320px]">
            <a href="/home" className="hover:text-background">{t('footer.home')}</a>
            <a href="/blog" className="hover:text-background">{t('footer.blog')}</a>
            <a href="/about" className="hover:text-background">{t('footer.about')}</a>
            <a href="/contacts" className="hover:text-background">{t('footer.contacts')}</a>
          </div>
          <img src={Icons} className="mt-12" alt="Icons" />
          <hr className="w-full h-1 bg-background mt-12 select-none" />
          <h6 className="mt-10">{t('footer.copyright')}</h6>
        </div>
      </div>
    </div>
  );
}
