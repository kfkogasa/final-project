/**
 * Created by kkoneko on 11/26/2015.
 *
 * Uses Dr. Mora's JavaScript with small alterations
 */

Template.foodForm.events({
  //runs on change to any field to recalculate total CO2
  "change": function (event, template) {
    var totalfood = 0;

    var poultry = (document.getElementById('poultry').value);

    var fish = (document.getElementById('seafood').value);

    var dairy = (document.getElementById('milk').value);
    var vegetables = (document.getElementById('vegetables').value);
//    var bakery = (document.getElementById('bakery1').value);
    var drinks = (document.getElementById('drinks').value);
    var beef = (document.getElementById('meat').value);

    if (beef !== '') {
      var beef_total = beef * 6.09 * 365 * 0.000001;
//      $('#beef').val(beef_total.toFixed(2));
      totalfood = totalfood + beef_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
    }

    if (poultry !== '') {
      var poultry_total = poultry * 4.27 * 365 * 0.000001;
//      $('#poultry').val(poultry_total.toFixed(2));
      totalfood = totalfood + poultry_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//     document.getElementById("food").innerHTML = totalfood.toFixed(2);
    }
    if (fish !== '') {
      var fish_total = fish * 5.71 * 365 * 0.000001;
//      $('#fish').val(fish_total.toFixed(2));
      totalfood = totalfood + fish_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
    }
    if (dairy !== '') {
      var dairy_total = dairy * 4 * 365 * 0.000001;
//      $('#dairy').val(dairy_total.toFixed(2));
      totalfood = totalfood + dairy_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
    }
    if (vegetables !== '') {
      var vegetables_total = vegetables * 3.35 * 365 * 0.000001;
//      $('#vegetables').val(vegetables_total.toFixed(2));
      totalfood = totalfood + vegetables_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
    }

    /**
    if (bakery !== '') {
      var bakery_total = bakery * 1.45 * 365 * 0.000001;
      $('#bakery').val(bakery_total.toFixed(2));
      totalfood = totalfood + bakery_total;
      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
      document.getElementById("food").innerHTML = totalfood.toFixed(2);
    }
     */

    if (drinks !== '') {
      var drinks_total = drinks * 2.24 * 365 * 0.000001;
//      $('#drinks').val(drinks_total.toFixed(2));
      totalfood = totalfood + drinks_total;
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
//      $('#total_food').val(totalfood.toFixed(2));

    }
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
//    $('#disfood').hide();
//    $('#andifood').show();

  }

});