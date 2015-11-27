/**
 * Created by kkoneko on 11/25/2015.
 *
 * Dr. Mora's JavaScript edited slightly
 */

//alert(totalcal);


function common_carbon() {
  var totalcal = 0;


  var miles_year = (document.getElementById('miles_year1').value);
  var miles_gallon = (document.getElementById('miles_gallon1').value);

  //alert(miles_gallon);
  //alert(miles_year);
  var bus = (document.getElementById('bus1').value);
  //alert(bus);
  var transit = (document.getElementById('transit_rail1').value);
  var air_travel = (document.getElementById('miles_flown1').value);
  var optionvalue = (document.getElementById('option_value').value);

  var unit_value = (document.getElementById('unit_value').value);
  if (unit_value == 'mile')
  {
    DistanceConversor = 1;
  }
  else if(bus != '' || transit != '' || air_travel != '' || miles_year != '' || miles_gallon != '')
  {
    DistanceConversor = 1.60934;
  }

//alert(optionvalue);



  //gallon per year

  if (optionvalue == 'diesel' && miles_gallon != '' && miles_year != '') {
    //var car_diesel = (miles_year / 20 * 2335 + 100 / 20 * 10153 + 100 * 56) * 0.000001;

    var gallon=(((miles_year/miles_gallon*2307)+(miles_year/miles_gallon*10153)+(miles_year*56))*0.000001) * DistanceConversor;
    //alert(gallon);
    $('#miles_gallon').val(gallon.toFixed(2));
    totalcal = totalcal + gallon;
    //alert(totalcal);
    $('#total_carbon').val(totalcal.toFixed(2));
    document.getElementById("amount").innerHTML = totalcal.toFixed(2);

  } else if(optionvalue == 'gasolin' && miles_gallon != '' && miles_year != ''){


    //alert(miles_year);
    var gallon=(((miles_year/miles_gallon*2307)+(miles_year/miles_gallon*8874)+(miles_year*56))*0.000001) * DistanceConversor;

    //alert(gallon);
    //var car_diesel = (miles_year / 20 * 2335 + 100 / 20 * 8874 + 100 * 56) * 0.000001;
    $('#miles_gallon').val(gallon.toFixed(2));
    totalcal = totalcal + gallon;
    // alert(totalcal);
    $('#total_carbon').val(totalcal.toFixed(2));
    document.getElementById("amount").innerHTML = totalcal.toFixed(2);
  }




  if (bus !== '') {
    var bus_total = (bus * 300 * 1.26 * 0.000001) * DistanceConversor;
    // alert(bus_total);
    $('#bus').val(bus_total.toFixed(2));
    totalcal = totalcal + bus_total;
    $('#total_carbon').val(totalcal.toFixed(2));
    //alert(totalcal);
    document.getElementById("amount").innerHTML = totalcal.toFixed(2);
  }
  if (transit !== '') {
    var transit_total = (transit * 163 * 1.26 * 0.000001) * DistanceConversor;
    $('#transit_rail').val(transit_total.toFixed(2));
    totalcal = totalcal + transit_total;
    //alert(totalcal);
    $('#total_carbon').val(totalcal.toFixed(2));
    document.getElementById("amount").innerHTML = totalcal.toFixed(2);
  }

  if (air_travel !== '') {

    var air_total = (air_travel * 223 * 2 * 0.000001) * DistanceConversor;
    $('#miles_flown').val(air_total.toFixed(2));
    totalcal = totalcal + air_total;
    document.getElementById("amount").innerHTML = totalcal.toFixed(2);
    $('#total_carbon').val(totalcal.toFixed(2));
  }
  document.getElementById("amount").innerHTML = totalcal.toFixed(2);
  $('#dis').hide();
  $('#andi').show();

}

function common_housing() {
  var totalhouse = 0;

  var electricity = (document.getElementById('electricity').value);
  //alert(electricity);
  var gas = (document.getElementById('gas1').value);
  //alert(bus);
  var fuels = (document.getElementById('fuels1').value);
  var water_used = (document.getElementById('water_used1').value);
  var termvalue = (document.getElementById('term_value').value);


  if (termvalue == 'term1') {
    var gas_value = gas * 4317 * 1.14 * 0.000001;
    $('#gas').val(gas_value.toFixed(2));
    totalhouse = totalhouse + gas_value;
    $('#total_house').val(totalhouse.toFixed(2));
    document.getElementById("house").innerHTML = totalhouse.toFixed(2);
  } else if (termvalue == 'term2') {
    var gas_value = gas * 5470 * 1.14 * 0.000001;
    $('#gas').val(gas_value.toFixed(2));
    totalhouse = totalhouse + gas_value;
    $('#total_house').val(totalhouse.toFixed(2));
    document.getElementById("house").innerHTML = totalhouse.toFixed(2);
  } else {
    var gas_last = gas * 547 * 1.14 * 0.000001;
    $('#gas').val(gas_last.toFixed(2));
    totalhouse = totalhouse + gas_last;
    $('#total_house').val(totalhouse.toFixed(2));
    document.getElementById("house").innerHTML = totalhouse.toFixed(2);
  }

  if (electricity !== '') {
    var electricity_total = electricity * 11789 * 1.09 * 0.000001;
    $('#electricity').val(electricity_total.toFixed(2));
    totalhouse = totalhouse + electricity_total;
    $('#total_house').val(totalhouse.toFixed(2));
    //alert(totalcal);
    document.getElementById("house").innerHTML = totalhouse.toFixed(2);
  }

  if (fuels !== '') {
    var fuels_total = fuels * 682 * 0.000001;
    $('#fuels').val(fuels_total.toFixed(2));
    totalhouse = totalhouse + fuels_total;
    $('#total_house').val(totalhouse.toFixed(2));
    //alert(totalcal);
    document.getElementById("house").innerHTML = totalhouse.toFixed(2);
  }

  if (water_used !== '') {
    var water_used_total = water_used * 11707 * 0.000001;
    $('#water_used').val(water_used_total.toFixed(2));
    totalhouse = totalhouse + water_used_total;
    //alert(totalcal);
    document.getElementById("house").innerHTML = totalhouse.toFixed(2);

    $('#total_house').val(totalhouse.toFixed(2));

  }
  document.getElementById("house").innerHTML = totalhouse.toFixed(2);
  $('#dishouse').hide();
  $('#andihouse').show();




}



function common_food() {
  var totalfood = 0;

  var poultry = (document.getElementById('poultry1').value);

  var fish = (document.getElementById('fish1').value);

  var dairy = (document.getElementById('dairy1').value);
  var vegetables = (document.getElementById('vegetables1').value);
  var bakery = (document.getElementById('bakery1').value);
  var drinks = (document.getElementById('drinks1').value);
  var beef = (document.getElementById('beef1').value);

  if (beef !== '') {
    var beef_total = beef * 6.09 * 365 * 0.000001;
    $('#beef').val(beef_total.toFixed(2));
    totalfood = totalfood + beef_total;
    $('#total_food').val(totalfood.toFixed(2));
    //alert(totalcal);
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
  }

  if (poultry !== '') {
    var poultry_total = poultry * 4.27 * 365 * 0.000001;
    $('#poultry').val(poultry_total.toFixed(2));
    totalfood = totalfood + poultry_total;
    $('#total_food').val(totalfood.toFixed(2));
    //alert(totalcal);
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
  }
  if (fish !== '') {
    var fish_total = fish * 5.71 * 365 * 0.000001;
    $('#fish').val(fish_total.toFixed(2));
    totalfood = totalfood + fish_total;
    $('#total_food').val(totalfood.toFixed(2));
    //alert(totalcal);
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
  }
  if (dairy !== '') {
    var dairy_total = dairy * 4 * 365 * 0.000001;
    $('#dairy').val(dairy_total.toFixed(2));
    totalfood = totalfood + dairy_total;
    $('#total_food').val(totalfood.toFixed(2));
    //alert(totalcal);
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
  }
  if (vegetables !== '') {
    var vegetables_total = vegetables * 3.35 * 365 * 0.000001;
    $('#vegetables').val(vegetables_total.toFixed(2));
    totalfood = totalfood + vegetables_total;
    $('#total_food').val(totalfood.toFixed(2));
    //alert(totalcal);
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
  }
  if (bakery !== '') {
    var bakery_total = bakery * 1.45 * 365 * 0.000001;
    $('#bakery').val(bakery_total.toFixed(2));
    totalfood = totalfood + bakery_total;
    $('#total_food').val(totalfood.toFixed(2));
    //alert(totalcal);
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
  }
  if (drinks !== '') {
    var drinks_total = drinks * 2.24 * 365 * 0.000001;
    $('#drinks').val(drinks_total.toFixed(2));
    totalfood = totalfood + drinks_total;
    //alert(totalcal);
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
    $('#total_food').val(totalfood.toFixed(2));

  }
  document.getElementById("food").innerHTML = totalfood.toFixed(2);
  $('#disfood').hide();
  $('#andifood').show();


}

function common_goods() {

  var totalgoods = 0;

  var cloth = (document.getElementById('cloth1').value);
  var furniture = (document.getElementById('furniture1').value);
  var health_care = (document.getElementById('health_care1').value);
  var vehicle = (document.getElementById('vehicle1').value);
  var house_maintance = (document.getElementById('house_maintance1').value);



  if (cloth !== '') {
    var cloth_total = cloth * 750 * 12 * 0.000001;
    $('#cloth').val(cloth_total.toFixed(2));
    totalgoods = totalgoods + cloth_total;
    $('#total_goods').val(totalgoods.toFixed(2));
    //alert(totalcal);
    document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
  }

  if (furniture !== '') {
    var furniture_total = furniture * 614 * 12 * 0.000001;
    $('#furniture').val(furniture_total.toFixed(2));
    totalgoods = totalgoods + furniture_total;
    $('#total_goods').val(totalgoods.toFixed(2));
    //alert(totalcal);
    document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
  }

  if (health_care !== '') {
    var health_care_total = health_care * 1151 * 12 * 0.000001;
    $('#health_care').val(health_care_total.toFixed(2));
    totalgoods = totalgoods + health_care_total;
    $('#total_goods').val(totalgoods.toFixed(2));
    //alert(totalcal);
    document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
  }

  if (vehicle !== '') {
    var vehicle_total = vehicle * 433 * 12 * 0.000001;
    $('#vehicle').val(vehicle_total.toFixed(2));
    totalgoods = totalgoods + vehicle_total;
    $('#total_goods').val(totalgoods.toFixed(2));
    //alert(totalcal);
    document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
  }

  if (house_maintance !== '') {
    var house_maintance_total = house_maintance * 134 * 12 * 0.000001;
    $('#house_maintance').val(house_maintance_total.toFixed(2));
    totalgoods = totalgoods + house_maintance_total;
    //alert(totalcal);
    document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
    $('#total_goods').val(totalgoods.toFixed(2));


  }
  document.getElementById("goods").innerHTML = totalgoods.toFixed(2);
  $('#disgoods').hide();
  $('#andigoods').show();



}

/**
$(document).ready(function () {
  $('.miles').tooltip({title: "miles per gallon", placement: "top"});

});

$(document).ready(function () {
  $('.miles').tooltip({title: "miles per gallon", placement: "top"});

});

$(document).ready(function () {
  $('.bus').tooltip({title: "bus", placement: "top"});

});
$(document).ready(function () {
  $('.commuter').tooltip({title: "commuter rail", placement: "top"});

});

$(document).ready(function () {
  $('.inter').tooltip({title: "inter city rail", placement: "top"});

});
$(document).ready(function () {
  $('.transit').tooltip({title: "transit rail", placement: "top"});

});
$(document).ready(function () {
  $('.flown').tooltip({title: "air travel", placement: "top"});

});
$(document).ready(function () {
  $('.electricity').tooltip({title: "electricity", placement: "top"});

});
$(document).ready(function () {
  $('.gas').tooltip({title: "gas", placement: "top"});

});
$(document).ready(function () {
  $('.fuels').tooltip({title: "fuels", placement: "top"});

});
$(document).ready(function () {
  $('.water_used').tooltip({title: "water_used", placement: "top"});

});


$(document).ready(function () {
  $('.beef').tooltip({title: "beef", placement: "top"});

});
$(document).ready(function () {
  $('.poultry').tooltip({title: "poultry", placement: "top"});

});
$(document).ready(function () {
  $('.fish').tooltip({title: "fish", placement: "top"});

});
$(document).ready(function () {
  $('.dairy').tooltip({title: "dairy", placement: "top"});

});
$(document).ready(function () {
  $('.vegetables').tooltip({title: "vegetables", placement: "top"});

});
$(document).ready(function () {
  $('.bakery').tooltip({title: "bakery", placement: "top"});

});
$(document).ready(function () {
  $('.drinks').tooltip({title: "drinks", placement: "top"});

});
$(document).ready(function () {
  $('.cloth').tooltip({title: "cloth", placement: "top"});

});
$(document).ready(function () {
  $('.furniture').tooltip({title: "furniture", placement: "top"});

});
$(document).ready(function () {
  $('.health_care').tooltip({title: "health care", placement: "top"});

});
$(document).ready(function () {
  $('.vehicle').tooltip({title: "vehicle", placement: "top"});

});
$(document).ready(function () {
  $('.house_maintance').tooltip({title: "house maintance", placement: "top"});

});
 */
