const header = {
  className: 'h1',
  text: 'Супер Калькулятор! Просто охренеть! :)',
  tagName: 'h1',
};

const audio = {
  className: 'click',
  text: '',
  tagName: 'audio',
};

View.assign(header);

const audioClick = View.assign(audio);
audioClick.src = './6a6ad928cfac061.mp3';

View.assign({className: 'container'});

const calculator = new Calculator('.container');

const list = new ActivityLog('.container');

function click(e) {
  list.subscribe(calculator.controller(e));
}

document.body.addEventListener('click', click);