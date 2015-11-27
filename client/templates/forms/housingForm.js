/**
 * Created by kkoneko on 11/26/2015.
 *
 * Uses Dr. Mora's JavaScript with small alterations
 */

Template.housingForm.events({
  //runs on change to any field to recalculate total CO2
  "change": function (event, template) {
    var totalhouse = 0;

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
      totalhouse = totalhouse + gas_value;
      //$('#total_house').val(totalhouse.toFixed(2));
//      document.getElementById("house").innerHTML = totalhouse.toFixed(2);
    } else if (termvalue == 'cubicFeet') {
      var gas_value = gas * 5470 * 1.14 * 0.000001;
      //$('#gas').val(gas_value.toFixed(2));
      totalhouse = totalhouse + gas_value;
      //$('#total_house').val(totalhouse.toFixed(2));
//      document.getElementById("house").innerHTML = totalhouse.toFixed(2);
    } else {
      var gas_last = gas * 547 * 1.14 * 0.000001;
      //$('#gas').val(gas_last.toFixed(2));
      totalhouse = totalhouse + gas_last;
      //$('#total_house').val(totalhouse.toFixed(2));
//      document.getElementById("house").innerHTML = totalhouse.toFixed(2);
    }

    if (electricity !== '') {
      var electricity_total = electricity * 11789 * 1.09 * 0.000001;
//      $('#electricity').val(electricity_total.toFixed(2));
      totalhouse = totalhouse + electricity_total;
//      $('#total_house').val(totalhouse.toFixed(2));
//      alert(totalcal);
//      document.getElementById("house").innerHTML = totalhouse.toFixed(2);
    }

    if (fuels !== '') {
      var fuels_total = fuels * 682 * 0.000001;
//      $('#fuels').val(fuels_total.toFixed(2));
      totalhouse = totalhouse + fuels_total;
//      $('#total_house').val(totalhouse.toFixed(2));
      //alert(totalcal);
//      document.getElementById("house").innerHTML = totalhouse.toFixed(2);
    }

    if (water_used !== '') {
      var water_used_total = water_used * 11707 * 0.000001;
//      $('#water_used').val(water_used_total.toFixed(2));
      totalhouse = totalhouse + water_used_total;
      //alert(totalcal);
//      document.getElementById("house").innerHTML = totalhouse.toFixed(2);

//      $('#total_house').val(totalhouse.toFixed(2));

    }
    document.getElementById("house").innerHTML = totalhouse.toFixed(2);
//    $('#dishouse').hide();
//    $('#andihouse').show();

  }

});
