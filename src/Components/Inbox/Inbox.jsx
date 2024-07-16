import React from 'react';
import styles from './Inbox.module.css';
import Inboxbg from '../../img/Inboxinfograph.png';
import { useTranslation } from 'react-i18next';

export default function Inbox() {
  const { t } = useTranslation();

  return (
    <div className={styles.Inbox}>
      <img src={Inboxbg} className={styles.infograph_1} alt="Infograph" />
      <img src={Inboxbg} className={styles.infograph_2} alt="Infograph" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-[450px] px-20 pt-20 text-white select-none flex items-center flex-col`}>
          <h6 className="text-center text-[30px] lg:text-[52px]">
            {t('inbox.title')}
          </h6>

          <div className="flex flex-col items-center w-[500px] h-[300px] my-5 lg:flex-row lg:h-[200px]">
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              className="block flex-1 border-0 pl-4 mt-2 outline-none bg-white w-[320px] min-h-[55px] max-h-[55px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-md sm:leading-6 rounded-lg lg:rounded-l-lg lg:rounded-r-none"
              placeholder={t('inbox.placeholder')}
            />
            <button className="bg-background text-white border-2 border-white hover:bg-blue-700 hover:text-white mt-2 font-bold w-[320px] h-[55px] lg:w-[180px] rounded-lg lg:rounded-l-none lg:rounded-r-lg">
              {t('inbox.buttonText')}
            </button>
          </div>
          <h6 className="text-center text-text-grey font-light" style={{ fontSize: "16px" }}>
            {t('inbox.responseTime')}
          </h6>
        </div>
      </div>
    </div>
  );
}
