'use strict';

// write your code here
const h1 = document.querySelector('.logo');
const body = document.body;

const promSuccess = () => {
  return new Promise((resolve) => {
    const div = document.createElement('div');

    div.classList.add('message');
    div.textContent = 'Promise was resolved';
    body.append(div);
    resolve();
  });
};

const promError = () => {
  return new Promise((resolve, reject) => {
    const div = document.createElement('div');

    div.classList.add('message', 'error-message');
    div.textContent = `Promise was rejected!`;
    body.append(div);
    reject(div);
  });
};

h1.addEventListener('click', promSuccess);
setTimeout(promError, 3000);
