function ActivityLog(appendTo) {
  const listData = [
    {
      className: 'list_wrapper',
    },
    {
      className: 'h2',
      appendTo: '.list_wrapper',
      text: 'Журнал действий',
      tagName: 'h2',
    },
    {
      className: 'list',
      appendTo: '.list_wrapper',
      tagName: 'ol',
    },
  ];

  class ActivityLog {
    constructor(data, appendTo) {
      View.assign(data, '', appendTo);
    }

    _addLi(data) {
      const liData = {className: 'li', appendTo: '.list', text: `${data.field} = ${data.result}`, tagName: 'li'};
      View.assign(liData);
    }

    subscribe(data) {
      if (data && data.update) {
        this._addLi(data)
      }
    }
  }

  return new ActivityLog(listData, appendTo)
}

