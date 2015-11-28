/**
 * Created by kkoneko on 11/26/2015.
 *
 * Uses Dr. Mora's JavaScript with small alterations
 */

Template.transportationForm.events({
  //runs on change to any field to recalculate total CO2
  "change": function () {
    var totalTransportation = 0;

    var miles_year = (document.getElementById('carDistance').value);
    var miles_gallon = (document.getElementById('carEfficiency').value);

    //alert(miles_gallon);
    //alert(miles_year);
    var bus = (document.getElementById('busDistance').value);
    //alert(bus);
    var transit = (document.getElementById('trainDistance').value);
    var air_travel = (document.getElementById('flyingDistance').value);
    var optionvalue = (document.getElementById('carType').value);

    var unit_value = (document.getElementById('units').value);
    if (unit_value == 'miles') {
      DistanceConversor = 1;
    }

    //not sure why these elseif parameters...
    else if (bus != '' || transit != '' || air_travel != '' || miles_year != '' || miles_gallon != '') {
      //converts miles to kilometers
      DistanceConversor = 1.60934;
    }

//alert(optionvalue);

    //gallon per year

    if (optionvalue == 'diesel' && miles_gallon != '' && miles_year != '') {
      //var car_diesel = (miles_year / 20 * 2335 + 100 / 20 * 10153 + 100 * 56) * 0.000001;

      var gallon = (((miles_year / miles_gallon * 2307) + (miles_year / miles_gallon * 10153) + (miles_year * 56)) * 0.000001) * DistanceConversor;
      //alert(gallon);
//      $('#miles_gallon').val(gallon.toFixed(2));
      totalTransportation = totalTransportation + gallon;
      //alert(totalTransportation);
//      $('#total_carbon').val(totalTransportation.toFixed(2));
//      document.getElementById("transportation").innerHTML = totalTransportation.toFixed(2);

    } else if (optionvalue == 'gasoline' && miles_gallon != '' && miles_year != '') {
      //alert(miles_year);
      var gallon = (((miles_year / miles_gallon * 2307) + (miles_year / miles_gallon * 8874) + (miles_year * 56)) * 0.000001) * DistanceConversor;

      //alert(gallon);
      //var car_diesel = (miles_year / 20 * 2335 + 100 / 20 * 8874 + 100 * 56) * 0.000001;
//      $('#miles_gallon').val(gallon.toFixed(2));
      totalTransportation = totalTransportation + gallon;
      // alert(totalTransportation);
//      $('#total_carbon').val(totalTransportation.toFixed(2));
//      document.getElementById("transportation").innerHTML = totalTransportation.toFixed(2);
    }

    if (bus !== '') {
      var bus_total = (bus * 300 * 1.26 * 0.000001) * DistanceConversor;
      // alert(bus_total);
//      $('#bus').val(bus_total.toFixed(2));
      totalTransportation = totalTransportation + bus_total;
//      $('#total_carbon').val(totalTransportation.toFixed(2));
      //alert(totalTransportation);
//      document.getElementById("transportation").innerHTML = totalTransportation.toFixed(2);
    }

    if (transit !== '') {
      var transit_total = (transit * 163 * 1.26 * 0.000001) * DistanceConversor;
//      $('#transit_rail').val(transit_total.toFixed(2));
      totalTransportation = totalTransportation + transit_total;
      //alert(totalTransportation);
//      $('#total_carbon').val(totalTransportation.toFixed(2));
//      document.getElementById("transportation").innerHTML = totalTransportation.toFixed(2);
    }

    if (air_travel !== '') {

      var air_total = (air_travel * 223 * 2 * 0.000001) * DistanceConversor;
//      $('#miles_flown').val(air_total.toFixed(2));
      totalTransportation = totalTransportation + air_total;
//      document.getElementById("transportation").innerHTML = totalTransportation.toFixed(2);
//      $('#total_carbon').val(totalTransportation.toFixed(2));
    }

    document.getElementById("transportation").innerHTML = totalTransportation.toFixed(2);
//    $('#dis').hide();
//    $('#andi').show();

  },

  "click #save": function () {
    var units = document.getElementById('units').value;

    if (document.getElementById('carDistance').value !== '') {
      var carDistance = document.getElementById('carDistance').value;
    }
    else {
      var carDistance = null;
    }

    var carType = document.getElementById('carType').value;

    if (document.getElementById('carEfficiency').value !== '') {
      var carEfficiency = document.getElementById('carEfficiency').value;
    }
    else {
      var carEfficiency = null;
    }

    if (document.getElementById('trainDistance').value !== '') {
      var trainDistance = document.getElementById('trainDistance').value;
    }
    else {
      var trainDistance = null;
    }

    if (document.getElementById('busDistance').value !== '') {
      var busDistance = document.getElementById('busDistance').value;
    }
    else {
      var busDistance = null;
    }

    if (document.getElementById('flyingDistance').value !== '') {
      var flyingDistance = document.getElementById('flyingDistance').value;
    }
    else {
      var flyingDistance = null;
    }

    Meteor.call("addTransportationUsageData", units, carDistance, carType, carEfficiency, trainDistance, busDistance, flyingDistance);
  }
});