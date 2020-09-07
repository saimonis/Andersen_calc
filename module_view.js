class View {
  constructor(data) {
    this.data = data;
  };

  static assign(data, className, appendTo) {
    let usedData;
    let result = {};
    Array.isArray(data) ? usedData = data : usedData = [data];
    typeof usedData[0] === 'string' ? usedData = usedData.map((item) => ({text: item})) : null;
    for (let i = 0; i < usedData.length; i++) {
      const element = document.createElement(usedData[i].tagName || 'div');
      element.className = usedData[i].className || className || '';
      usedData[i].text ? element.textContent = usedData[i].text : null;
      document.querySelector(usedData[i].appendTo || appendTo || '.body').append(element);
      usedData.length !== 1 ? result[usedData[i].className] = element : result = element;
    }
    return result;
  };
}