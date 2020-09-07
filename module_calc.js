function Calculator(appendCalcTo) {
  const btns = ['+', '-', 'C', 1, 2, '<=', 3, 4, '÷', 5, 6, '×', 7, 8, '=', 9, '0', '.'];
  const calcData = [
    {
      className: 'calculator',
    },
    {
      className: 'popup',
      appendTo: '.calculator',
      text: 'Неверное значение',
    },
    {
      className: 'panel',
      appendTo: '.calculator',
    },
    {
      className: 'buttons',
      appendTo: '.calculator',
    },
  ];

  class Calculator {
    constructor(data, buttons, appendCalcTo) {
      this.data = View.assign(data, '', appendCalcTo);
      View.assign(buttons, 'btn', '.buttons');
      this.tempLastValue = '';
    }

    _checkField(field) {
      if (/^-?\d+$/gm.test(field)) {
        return;
      }
      return true;
    };

    _calcValue(field) {
      return eval(field.replace(/×/mg, '*').replace(/÷/mg, '/'));
    };

    _showError(value = false) {
      value ? this.data.popup.style.display = 'block' : this.data.popup.style.display = 'none';
    }

    _updatePanel(field) {
      try {
        this._showError();
        if (field) {
          let result = this._calcValue(field);
          this.tempLastValue === result ? null : (() => {
            this.tempLastValue = result;
            this.data.panel.textContent = result;
          })();
          return {update: true, result: result, field};
        }
      } catch (e) {
        this._showError(true);
        throw new Error('Calculation declined because of incorrect data');
      }
    }

    _pressBtn(e) {
      audioClick.play();
      const input = e.target.textContent;
      let field = this.data.panel.textContent;
      switch (input) {
        case '=':
          return this._checkField(field) ? this._updatePanel(field) : null;
        case 'C':
          this.data.panel.textContent = '';
          return;
        case '<=':
          this.data.panel.textContent = field.substr(0, field.length - 1);
          return;
      }

      if (e.target.className === 'btn') {
        this.data.panel.textContent += input;
      }
    }

    controller(e) {
      if (e.target.className === 'btn') {
        return this._pressBtn(e)
      }
    }
  }

  return new Calculator(calcData, btns, appendCalcTo)
}
