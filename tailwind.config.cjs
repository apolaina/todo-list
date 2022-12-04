/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'todo-green-50': 'rgb(90, 172, 68)',
        'todo-green-100': 'rgb(97, 189, 79)',
        'todo-grey-50': '#EBECF0',
        'todo-grey-100': '',
        'todo-grey-200': 'rgba(9, 30, 66, 0.13)',
        'todo-grey-300': 'rgb(97, 97, 97)',
        'todo-grey-400': 'rgb(244, 245, 247)',
        'todo-grey-500': 'rgba(9, 30, 66, 0.08)',
        'todo-grey-600': 'rgba(9, 30, 66, 0.04)',
        'todo-icon': 'rgb(145, 145, 145)',
        'todo-text': 'rgb(49, 49, 49)',
      },
      borderRadius: {
        'sm': '3px',
      },
      width: {
        '68': '272px',
      }
    }
  },
  plugins: [],
}
