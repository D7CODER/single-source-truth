import Widget from './widget';

var DarkWidget = Widget.extend({});

DarkWidget.reopenClass({
  FIXTURES: [
    { id: 3, name: 'Darkness rules' }
  ]
});

export default DarkWidget;
