Template.dashboard.onRendered(function () {

  var carCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).carCO2);

  var trainCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).trainCO2);

  var busCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).busCO2);

  var flyingCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).flyingCO2);

  var electricityCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).electricityCO2);

  var fuelCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).fuelCO2);

  var gasCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).gasCO2);

  var waterCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).waterCO2);

  var meatCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).meatCO2);

  var poultryCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).poultryCO2);

  var seafoodCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).seafoodCO2);

  var vegetablesCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).vegetablesCO2);

  var dairyCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).dairyCO2);

  var drinksCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).drinksCO2);

  var clothCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).clothCO2);

  var furnitureCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).furnitureCO2);

  var healthcareCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).healthcareCO2);

  var vehicleCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).vehicleCO2);

  var maintenanceCO2 = Number(UsageData.findOne({
    owner: Meteor.userId()
  }).maintenanceCO2);

  var chart = new Highcharts.Chart({
    chart: {renderTo: 'CO2BalanceChart', type: 'column', marginRight: 0},
    legend: {enabled: false},
    title: {text: '', style: {display: 'none'}},
    xAxis: {categories: ['Your<br>emitted<br>CO2', 'CO2<br>sequestered<br>by your trees<br>.']},
    yAxis: {allowDecimals: false, min: 0, title: {text: 'Tons of CO2'}},
    tooltip: {
      backgroundColor: "rgba(255,255,255,1)", formatter: function () {
        return this.y + ' tons of CO2 by ' + this.series.name
      }, hideDelay: 1
    },
    plotOptions: {
      column: {stacking: 'normal', borderWidth: .9},
      series: {pointWidth: 55}
    },
    series: [
      {name: 'your tree', data: [0, 6], color: 'green'},
      {name: 'your tree', data: [0, 0], color: 'green'},
      {name: 'your tree', data: [0, 6], color: 'green'},
      {name: 'your tree', data: [0, 18], color: 'green'},
      {name: 'your tree', data: [0, 0], color: 'green'},
      {name: 'your tree', data: [0, 4], color: 'green'},

      {name: 'vehicle', data: [carCO2, 0], color: '#8B98A4'},
      {name: 'train', data: [trainCO2, 0], color: '#8B98A4'},
      {name: 'bus', data: [busCO2, 0], color: '#8B98A4'},
      {name: 'flying', data: [flyingCO2, 0], color: '#8B98A4'},
      {name: 'electricity', data: [electricityCO2, 0], color: 'rgb(220,220,200)'},
      {name: 'fuel', data: [fuelCO2, 0], color: 'rgb(220,220,200)'},
      {name: 'gas', data: [gasCO2, 0], color: 'rgb(220,220,200)'},
      {name: 'water', data: [waterCO2, 0], color: 'rgb(220,220,200)'},
      {name: 'meat', data: [meatCO2, 0], color: '#D7F57D'},
      {name: 'poultry', data: [poultryCO2, 0], color: '#D7F57D'},
      {name: 'seafood', data: [seafoodCO2, 0], color: '#D7F57D'},
      {name: 'vegetables', data: [vegetablesCO2, 0], color: '#D7F57D'},
      {name: 'dairy', data: [dairyCO2, 0], color: '#D7F57D'},
      {name: 'drinks', data: [drinksCO2, 0], color: '#D7F57D'},
      {name: 'cloth', data: [clothCO2, 0], color: '#B9CDEB'},
      {name: 'furniture', data: [furnitureCO2, 0], color: '#B9CDEB'},
      {name: 'health care', data: [healthcareCO2, 0], color: '#B9CDEB'},
      {name: 'vehicle costs', data: [vehicleCO2, 0], color: '#B9CDEB'},
      {name: 'house maintance', data: [maintenanceCO2, 0], color: '#B9CDEB'}
    ]
  });
});
