/**
 * Created by kkoneko on 11/26/2015.
 *
 * Uses Dr. Mora's JavaScript with small alterations
 */

Template.shoppingForm.events({
  //runs on change to any field to recalculate total CO2
  "change": function (event, template) {
    var totalgoods = 0;

    var cloth = (document.getElementById('cloth').value);
    var furniture = (document.getElementById('furniture').value);
    var health_care = (document.getElementById('healthcare').value);
    var vehicle = (document.getElementById('vehicle').value);
    var house_maintance = (document.getElementById('maintenance').value);

    if (cloth !== '') {
      var cloth_total = cloth * 750 * 12 * 0.000001;
//      $('#cloth').val(cloth_total.toFixed(2));
      totalgoods = totalgoods + cloth_total;
//      $('#total_goods').val(totalgoods.toFixed(2));
      //alert(totalcal);
//      document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
      document.getElementById('clothCO2').innerHTML = cloth_total.toFixed(2);
    }

    if (furniture !== '') {
      var furniture_total = furniture * 614 * 12 * 0.000001;
//      $('#furniture').val(furniture_total.toFixed(2));
      totalgoods = totalgoods + furniture_total;
//      $('#total_goods').val(totalgoods.toFixed(2));
      //alert(totalcal);
//      document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
      document.getElementById('furnitureCO2').innerHTML = furniture_total.toFixed(2);
    }

    if (health_care !== '') {
      var health_care_total = health_care * 1151 * 12 * 0.000001;
//      $('#health_care').val(health_care_total.toFixed(2));
      totalgoods = totalgoods + health_care_total;
//      $('#total_goods').val(totalgoods.toFixed(2));
      //alert(totalcal);
//      document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
      document.getElementById('healthcareCO2').innerHTML = health_care_total.toFixed(2);
    }

    if (vehicle !== '') {
      var vehicle_total = vehicle * 433 * 12 * 0.000001;
//      $('#vehicle').val(vehicle_total.toFixed(2));
      totalgoods = totalgoods + vehicle_total;
//      $('#total_goods').val(totalgoods.toFixed(2));
      //alert(totalcal);
//      document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
      document.getElementById('vehicleCO2').innerHTML = vehicle_total.toFixed(2);
    }

    if (house_maintance !== '') {
      var house_maintance_total = house_maintance * 134 * 12 * 0.000001;
//      $('#house_maintance').val(house_maintance_total.toFixed(2));
      totalgoods = totalgoods + house_maintance_total;
      //alert(totalcal);
//      document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
//      $('#total_goods').val(totalgoods.toFixed(2));
      document.getElementById('maintenanceCO2').innerHTML = house_maintance_total.toFixed(2);
    }
    document.getElementById("shopping").innerHTML = totalgoods.toFixed(2);
//    $('#disgoods').hide();
//    $('#andigoods').show();

  },

  "click #save": function () {
    if (document.getElementById('cloth').value !== '') {
      var cloth = document.getElementById('cloth').value;
      var clothCO2 = document.getElementById('clothCO2').textContent;
    }
    else {
      var cloth = null;
      var clothCO2 = null;
    }

    if (document.getElementById('furniture').value !== '') {
      var furniture = document.getElementById('furniture').value;
      var furnitureCO2 = document.getElementById('furnitureCO2').textContent;
    }
    else {
      var furniture = null;
      var furnitureCO2 = null
    }

    if (document.getElementById('healthcare').value !== '') {
      var healthcare = document.getElementById('healthcare').value;
      var healthcareCO2 = document.getElementById('healthcareCO2').textContent;
    }
    else {
      var healthcare = null;
      var healthcareCO2 = null;
    }

    if (document.getElementById('vehicle').value !== '') {
      var vehicle = document.getElementById('vehicle').value;
      var vehicleCO2 = document.getElementById('vehicleCO2').textContent;
    }
    else {
      var vehicle = null;
      var vehicleCO2 = null;
    }

    if (document.getElementById('maintenance').value !== '') {
      var maintenance = document.getElementById('maintenance').value;
      var maintenanceCO2 = document.getElementById('maintenanceCO2').textContent;
    }
    else {
      var maintenance = null;
      var maintenanceCO2 = null;
    }

    Meteor.call("addShoppingUsageData", cloth, clothCO2, furniture, furnitureCO2, healthcare, healthcareCO2, vehicle, vehicleCO2, maintenance, maintenanceCO2);
  }

});
