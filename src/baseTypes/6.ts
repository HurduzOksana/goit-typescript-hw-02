/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

const result = customError();

if (typeof result === 'string') {
  
}

function customError() {
  throw new Error('Error');
}

let errorMessage: unknown = customError(); 
if (typeof errorMessage === 'string') {
  console.log(errorMessage); 
}


export {};