'use strict';

// write your code here
const h1 = document.querySelector('.logo');
const body = document.body;

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const div = document.createElement('div');

      div.classList.add('message', 'error-message');
      div.textContent = `Promise was rejected!`;
      body.append(div);
    }, 3000);
  });

const promise1 = () =>
  new Promise((resolve) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved';
    body.append(div);
    resolve();
  }).then(promise2);

h1.addEventListener('click', promise1);
