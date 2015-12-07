/**
 * Created by kkoneko on 11/26/2015.
 *
 * Uses Dr. Mora's JavaScript with small alterations
 */

Template.housingForm.events({
  //runs on change to any field to recalculate total CO2
  "change": function (event, template) {
    var totalHousing = 0;

    var electricity = (document.getElementById('electricity').value);
    //alert(electricity);

    var gas = (document.getElementById('gas').value);
    //alert(bus);

    var fuels = (document.getElementById('fuel').value);

    var water_used = (document.getElementById('water').value);

    var termvalue = (document.getElementById('gasUnits').value);

    if (termvalue == 'therms') {
      var gas_value = gas * 4317 * 1.14 * 0.000001;
      //$('#gas').val(gas_value.toFixed(2));
      totalHousing = totalHousing + gas_value;
      //$('#total_house').val(totalHousing.toFixed(2));
//      document.getElementById("housing").innerHTML = totalHousing.toFixed(2);
      document.getElementById('gasCO2').innerHTML = gas_value.toFixed(2);
    } else if (termvalue == 'cubicFeet') {
      var gas_value = gas * 5470 * 1.14 * 0.000001;
      //$('#gas').val(gas_value.toFixed(2));
      totalHousing = totalHousing + gas_value;
      //$('#total_house').val(totalHousing.toFixed(2));
//      document.getElementById("housing").innerHTML = totalHousing.toFixed(2);
      document.getElementById('gasCO2').innerHTML = gas_value.toFixed(2);
    } else {
      var gas_last = gas * 547 * 1.14 * 0.000001;
      //$('#gas').val(gas_last.toFixed(2));
      totalHousing = totalHousing + gas_last;
      //$('#total_house').val(totalHousing.toFixed(2));
//      document.getElementById("housing").innerHTML = totalHousing.toFixed(2);
      document.getElementById('gasCO2').innerHTML = gas_value.toFixed(2);
    }

    if (electricity !== '') {
      var electricity_total = electricity * 11789 * 1.09 * 0.000001;
//      $('#electricity').val(electricity_total.toFixed(2));
      totalHousing = totalHousing + electricity_total;
//      $('#total_house').val(totalHousing.toFixed(2));
//      alert(totalcal);
//      document.getElementById("housing").innerHTML = totalHousing.toFixed(2);
      document.getElementById('electricityCO2').innerHTML = electricity_total.toFixed(2);
    }

    if (fuels !== '') {
      var fuels_total = fuels * 682 * 0.000001;
//      $('#fuels').val(fuels_total.toFixed(2));
      totalHousing = totalHousing + fuels_total;
//      $('#total_house').val(totalHousing.toFixed(2));
      //alert(totalcal);
//      document.getElementById("housing").innerHTML = totalHousing.toFixed(2);
      document.getElementById('fuelCO2').innerHTML = fuels_total.toFixed(2);
    }

    if (water_used !== '') {
      var water_used_total = water_used * 11707 * 0.000001;
//      $('#water_used').val(water_used_total.toFixed(2));
      totalHousing = totalHousing + water_used_total;
      //alert(totalcal);
//      document.getElementById("housing").innerHTML = totalHousing.toFixed(2);

//      $('#total_house').val(totalHousing.toFixed(2));
      document.getElementById('waterCO2').innerHTML = water_used_total.toFixed(2);
    }
    document.getElementById("housing").innerHTML = totalHousing.toFixed(2);
//    $('#dishouse').hide();
//    $('#andihouse').show();

  },

  "click #save": function () {
    if (document.getElementById('electricity').value !== '') {
      var electricity = document.getElementById('electricity').value;
      var electricityCO2 = document.getElementById('electricityCO2').textContent;
    }
    else {
      var electricity = null;
      var electricityCO2 = null;
    }

    if (document.getElementById('fuel').value !== '') {
      var fuel = document.getElementById('fuel').value;
      var fuelCO2 = document.getElementById('fuelCO2').textContent;
    }
    else {
      var fuel = null;
      var fuelCO2 = null
    }

    if (document.getElementById('gas').value !== '') {
      var gas = document.getElementById('gas').value;
      var gasCO2 = document.getElementById('gasCO2').textContent;
    }
    else {
      var gas = null;
      var gasCO2 = null;
    }

    var gasUnits = document.getElementById('gasUnits').value;

    if (document.getElementById('water').value !== '') {
      var water = document.getElementById('water').value;
      var waterCO2 = document.getElementById('waterCO2').textContent;
    }
    else {
      var water = null;
      var waterCO2 = null;
    }

    Meteor.call("addHousingUsageData", electricity, electricityCO2, fuel, fuelCO2, gas, gasCO2, gasUnits, water, waterCO2);
  },

  "click #next": function () {
    if (document.getElementById('electricity').value !== '') {
      var electricity = document.getElementById('electricity').value;
      var electricityCO2 = document.getElementById('electricityCO2').textContent;
    }
    else {
      var electricity = null;
      var electricityCO2 = null;
    }

    if (document.getElementById('fuel').value !== '') {
      var fuel = document.getElementById('fuel').value;
      var fuelCO2 = document.getElementById('fuelCO2').textContent;
    }
    else {
      var fuel = null;
      var fuelCO2 = null
    }

    if (document.getElementById('gas').value !== '') {
      var gas = document.getElementById('gas').value;
      var gasCO2 = document.getElementById('gasCO2').textContent;
    }
    else {
      var gas = null;
      var gasCO2 = null;
    }

    var gasUnits = document.getElementById('gasUnits').value;

    if (document.getElementById('water').value !== '') {
      var water = document.getElementById('water').value;
      var waterCO2 = document.getElementById('waterCO2').textContent;
    }
    else {
      var water = null;
      var waterCO2 = null;
    }

    Meteor.call("addHousingUsageData", electricity, electricityCO2, fuel, fuelCO2, gas, gasCO2, gasUnits, water, waterCO2);
  }

});
