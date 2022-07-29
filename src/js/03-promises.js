import { Notify } from 'notiflix/build/notiflix-notify-aio';


//Cайт бібліотекі : https://notiflix.github.io/notify

//Приклад 1
//Notify.success('Sol lucet omnibus');
//Notify.failure('Qui timide rogat docet negare');

//Приклад 2
/*   createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  }); */


const form = document.querySelector(".form");
const delayInput = form.querySelector("input[name = delay]");
const stepInput = form.querySelector("input[name = step]");
const amountInput = form.querySelector("input[name = amount]");

form.addEventListener("submit",onSubmitForm);

function createPromise(position, delay) {
  return newMuPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if(shouldResolve) {
        resolve({position,delay});
      } 
        reject({position,delay});
    },delay);
  });
 //return newMuPromise
};

function onSubmitForm(event) {
  event.preventDefault();

  let delayValue = +delayInput.value;
  let stepValue = +stepInput.value;
  let amountValue = +amountInput.value + 1;

  for (let i = 1 ; i < amountValue; i++){
    createPromise(i,delayValue)
    .then(({position,delay}) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({position,delay}) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
   delayValue += stepValue
  }
};