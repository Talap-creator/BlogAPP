import React from 'react';
import styles from './About.module.css';
import aboutImg from '../../img/About.png';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className={styles.about}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h6 className={`mt-16 text-center text-text-grey ${styles.about_title}`}>{t('about.title')}</h6>
                <h3 className={`mt-16 font-bold text-center mx-auto w-[60%] ${styles.font}`}>{t('about.siteDescription')}</h3>
                <p className='my-10 text-text-grey mx-auto text-center w-[85%]'><span className='ml-6'>{t('about.cards.0.title')}</span> {t('about.cards.0.description')}</p>
                <img src={aboutImg} alt="About" />
                <div className="my-10">
                    <h6 className={`mt-16 text-text-grey ${styles.title}`}>{t('about.howWeWorkTitle')}</h6>
                    <h3 className={`my-16 font-bold text-left w-[60%] ${styles.font}`}>{t('about.howWeWorkSubtitle')}</h3>
                    <div className={`my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 `}>
                        <div className={`h-[400px] min-w-400px px-4 rounded-[18px] cursor-pointer select-none  ${styles.about_card}`}>
                             <h1>{t('about.cards.0.number')}</h1>
                             <h4>{t('about.cards.0.title')}</h4>
                             <h6>{t('about.cards.0.description')}</h6>
                        </div> 
                        <div className={`h-[400px] min-w-400px px-4 rounded-[18px] cursor-pointer select-none   ${styles.about_card}`}>
                             <h1>{t('about.cards.1.number')}</h1>
                             <h4>{t('about.cards.1.title')}</h4>
                             <h6>{t('about.cards.1.description')}</h6>
                        </div>
                        <div className={`h-[400px] min-w-400px px-4 rounded-[18px] cursor-pointer select-none   ${styles.about_card}`}>
                             <h1>{t('about.cards.2.number')}</h1>
                             <h4>{t('about.cards.2.title')}</h4>
                             <h6>{t('about.cards.2.description')}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
