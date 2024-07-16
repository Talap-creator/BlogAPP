import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Logo from '../../img/Logo.png';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const getLinkClasses = (isActive) =>
    isActive
      ? 'text-background underline text-text px-1 pt-1 text-md font-medium transition duration-300 ease-in-out'
      : 'text-text px-1 pt-1 text-md font-medium transition duration-300 ease-in-out hover:text-background hover:underline';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const getCurrentLanguageLabel = () => {
    switch (i18n.language) {
      case 'ru':
        return 'Русский';
      case 'kz':
        return 'Қазақша';
      default:
        return 'Language';
    }
  };

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
    setIsLangMenuOpen(false);
  };

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-9 w-auto scale-125" src={Logo} alt="Logo" />
          </div>


          <div className="flex items-center md:hidden">
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none mr-2"
              >
                {getCurrentLanguageLabel()}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3zm0 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 14.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 15z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Transition
                show={isLangMenuOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => changeLanguage('ru')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Русский
                    </button>
                    <button
                      onClick={() => changeLanguage('kz')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Қазақша
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
            <button
              onClick={toggleBurgerMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-light-grey hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть главное меню</span>
              {!isBurgerOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

         
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" className={({ isActive }) => getLinkClasses(isActive)}>
              {t('header.home')}
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => getLinkClasses(isActive)}>
              {t('header.blog')}
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => getLinkClasses(isActive)}>
              {t('header.about')}
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => getLinkClasses(isActive)}>
              {t('header.contacts')}
            </NavLink>
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                {getCurrentLanguageLabel()}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.707.293l4 4a1 1 0 01-1.414 1.414L10 5.414 6.707 8.707a1 1 0 01-1.414-1.414l4-4A1 1 0 0110 3zm0 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 14.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0110 15z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <Transition
                show={isLangMenuOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => changeLanguage('ru')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Русский
                    </button>
                    <button
                      onClick={() => changeLanguage('kz')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      Қазақша
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>


      <Transition
        show={isBurgerOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div className="max-w-7xl mx-auto flex flex-col pb-4 px-4 sm:px-6 lg:px-8">
              <NavLink to="/" className={({ isActive }) => getLinkClasses(isActive)}>
                {t('header.home')}
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => getLinkClasses(isActive)}>
                {t('header.blog')}
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => getLinkClasses(isActive)}>
                {t('header.about')}
              </NavLink>
              <NavLink to="/contacts" className={({ isActive }) => getLinkClasses(isActive)}>
                {t('header.contacts')}
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}

export default Header;
