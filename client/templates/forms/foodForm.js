/**
 * Created by kkoneko on 11/26/2015.
 *
 * Uses Dr. Mora's JavaScript for caculating CO2 emission with small alterations
 */
Template.foodForm.onRendered(function () {
  /**
   * load current user's data into form
   *
   */

  //meat data
  if ((UsageData.findOne({
        owner: Meteor.userId()
      }).meat) != null) {
    document.getElementById('meat').value = Number(UsageData.findOne({
      owner: Meteor.userId()
    }).meat);
  }

//poultry data
  if ((UsageData.findOne({
        owner: Meteor.userId()
      }).poultry) != null) {
    document.getElementById('poultry').value = Number(UsageData.findOne({
      owner: Meteor.userId()
    }).poultry);
  }

  //seafood data
  if ((UsageData.findOne({
        owner: Meteor.userId()
      }).seafood) != null) {
    document.getElementById('seafood').value = Number(UsageData.findOne({
      owner: Meteor.userId()
    }).seafood);
  }

  //vegetables data
  if ((UsageData.findOne({
        owner: Meteor.userId()
      }).vegetables) != null) {
    document.getElementById('vegetables').value = Number(UsageData.findOne({
      owner: Meteor.userId()
    }).vegetables);
  }

  //milk data
  if ((UsageData.findOne({
        owner: Meteor.userId()
      }).milk) != null) {
    document.getElementById('milk').value = Number(UsageData.findOne({
      owner: Meteor.userId()
    }).milk);
  }

  //drinks data
  if ((UsageData.findOne({
        owner: Meteor.userId()
      }).drinks) != null) {
    document.getElementById('drinks').value = Number(UsageData.findOne({
      owner: Meteor.userId()
    }).drinks);
  }
});

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
      document.getElementById('meatCO2').innerHTML = beef_total.toFixed(2);
    }

    if (poultry !== '') {
      var poultry_total = poultry * 4.27 * 365 * 0.000001;
//      $('#poultry').val(poultry_total.toFixed(2));
      totalfood = totalfood + poultry_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//     document.getElementById("food").innerHTML = totalfood.toFixed(2);
      document.getElementById('poultryCO2').innerHTML = poultry_total.toFixed(2);
    }
    if (fish !== '') {
      var fish_total = fish * 5.71 * 365 * 0.000001;
//      $('#fish').val(fish_total.toFixed(2));
      totalfood = totalfood + fish_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
      document.getElementById('seafoodCO2').innerHTML = fish_total.toFixed(2);
    }
    if (dairy !== '') {
      var dairy_total = dairy * 4 * 365 * 0.000001;
//      $('#dairy').val(dairy_total.toFixed(2));
      totalfood = totalfood + dairy_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
      document.getElementById('milkCO2').innerHTML = dairy_total.toFixed(2);
    }
    if (vegetables !== '') {
      var vegetables_total = vegetables * 3.35 * 365 * 0.000001;
//      $('#vegetables').val(vegetables_total.toFixed(2));
      totalfood = totalfood + vegetables_total;
//      $('#total_food').val(totalfood.toFixed(2));
      //alert(totalcal);
//      document.getElementById("food").innerHTML = totalfood.toFixed(2);
      document.getElementById('vegetablesCO2').innerHTML = vegetables_total.toFixed(2);
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
      document.getElementById('drinksCO2').innerHTML = drinks_total.toFixed(2);
    }
    document.getElementById("food").innerHTML = totalfood.toFixed(2);
//    $('#disfood').hide();
//    $('#andifood').show();

  },

  "click #save": function () {
    if (document.getElementById('meat').value !== '') {
      var meat = document.getElementById('meat').value;
      var meatCO2 = document.getElementById('meatCO2').textContent;
    }
    else {
      var meat = null;
      var meatCO2 = null;
    }

    if (document.getElementById('poultry').value !== '') {
      var poultry = document.getElementById('poultry').value;
      var poultryCO2 = document.getElementById('poultryCO2').textContent;
    }
    else {
      var poultry = null;
      var poultryCO2 = null
    }

    if (document.getElementById('seafood').value !== '') {
      var seafood = document.getElementById('seafood').value;
      var seafoodCO2 = document.getElementById('seafoodCO2').textContent;
    }
    else {
      var seafood = null;
      var seafoodCO2 = null;
    }

    if (document.getElementById('vegetables').value !== '') {
      var vegetables = document.getElementById('vegetables').value;
      var vegetablesCO2 = document.getElementById('vegetablesCO2').textContent;
    }
    else {
      var vegetables = null;
      var vegetablesCO2 = null;
    }

    if (document.getElementById('milk').value !== '') {
      var milk = document.getElementById('water').value;
      var milkCO2 = document.getElementById('milkCO2').textContent;
    }
    else {
      var milk = null;
      var milkCO2 = null;
    }

    if (document.getElementById('drinks').value !== '') {
      var drinks = document.getElementById('drinks').value;
      var drinksCO2 = document.getElementById('drinksCO2').textContent;
    }
    else {
      var drinks = null;
      var drinksCO2 = null;
    }

    Meteor.call("addFoodUsageData", meat, meatCO2, poultry, poultryCO2, seafood, seafoodCO2, vegetables, vegetablesCO2, milk, milkCO2, drinks, drinksCO2);
  },

  "click #next": function () {
    if (document.getElementById('meat').value !== '') {
      var meat = document.getElementById('meat').value;
      var meatCO2 = document.getElementById('meatCO2').textContent;
    }
    else {
      var meat = null;
      var meatCO2 = null;
    }

    if (document.getElementById('poultry').value !== '') {
      var poultry = document.getElementById('poultry').value;
      var poultryCO2 = document.getElementById('poultryCO2').textContent;
    }
    else {
      var poultry = null;
      var poultryCO2 = null
    }

    if (document.getElementById('seafood').value !== '') {
      var seafood = document.getElementById('seafood').value;
      var seafoodCO2 = document.getElementById('seafoodCO2').textContent;
    }
    else {
      var seafood = null;
      var seafoodCO2 = null;
    }

    if (document.getElementById('vegetables').value !== '') {
      var vegetables = document.getElementById('vegetables').value;
      var vegetablesCO2 = document.getElementById('vegetablesCO2').textContent;
    }
    else {
      var vegetables = null;
      var vegetablesCO2 = null;
    }

    if (document.getElementById('dairy').value !== '') {
      var dairy = document.getElementById('dairy').value;
      var dairyCO2 = document.getElementById('dairyCO2').textContent;
    }
    else {
      var milk = null;
      var milkCO2 = null;
    }

    if (document.getElementById('drinks').value !== '') {
      var drinks = document.getElementById('drinks').value;
      var drinksCO2 = document.getElementById('drinksCO2').textContent;
    }
    else {
      var drinks = null;
      var drinksCO2 = null;
    }

    Meteor.call("addFoodUsageData", meat, meatCO2, poultry, poultryCO2, seafood, seafoodCO2, vegetables, vegetablesCO2, dairy, dairyCO2, drinks, drinksCO2);
  }
});