import React from 'react';
import Image from '../../../img/Container.png'; 
import styles from './Featured.module.css';
import { useTranslation } from 'react-i18next';

export default function Featured() {
  const { t } = useTranslation();

  return (
    <div className={`flex items-center justify-center ${styles.featured} pb-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-1 h-full">
            <p className={`bigParagraphText ${styles.title}`}>{t('featured.featuredPost')}</p>
            <h1 className={styles.featuredPostTitle}>{t('featured.title')}</h1>
            <p className={`bigParagraphText ${styles.desc}`}>
              {t('featured.description')}
            </p>
            <button className="bg-white text-black mt-16 hover:bg-blue-700 hover:text-white font-bold py-3 px-12 rounded">
              {t('featured.readMore')}
            </button>
          </div>
          <div className="md:order-2">
            <img src={Image} alt="Featured" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
