module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: {
          DEFAULT: 'var(--text-color)',
          grey: 'var(--text-grey)',
          lightGrey: 'var(--text-light-grey)',
          white: 'var(--white)',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        h1: ['64px', '1'],
        h2: ['52px', '1'],
        h3: ['48px', '1'],
        h4: ['32px', '1'],
        h5: ['26px', '1'],
        h6: ['24px', '1'],
        bigParagraph: ['18px', '24px'],
        smallParagraph: ['16px', '24px'],
      },
    },
  },
  plugins: [],
};
