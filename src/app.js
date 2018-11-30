const NumberInfo = require('./models/number_info.js')
const OutputView = require('./views/output_view.js')
const SelectView = require('./views/select_view.js')

const startApp = () => {
  console.log("Javascript Loaded!");

  const selectButton = document.querySelector('#select-form')
  const selectView = new SelectView(selectButton);
  selectView.bindEvents();

  const outputElement = document.querySelector('#output-view')
  const outputView = new OutputView(outputElement);
  outputView.bindEvents();

  const numberInfo = new NumberInfo;
  numberInfo.bindEvents();
};

document.addEventListener("DOMContentLoaded", startApp);
