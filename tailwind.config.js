module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { blue: { DEFAULT: '#2fc7ff' }, pink: { DEFAULT: '#ff3fd8' }, ink: '#07070a', panel: '#121218', paper: '#f3f1f6' },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
