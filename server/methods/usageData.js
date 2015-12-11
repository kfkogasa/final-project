/**
 * Created by kkoneko on 11/26/2015.
 */

Meteor.methods({

  //transportation does not have motorcycleDistance yet
  addTransportationUsageData: function (units, carDistance, carType, carEfficiency, carCO2, trainDistance, trainCO2, busDistance, busCO2, flyingDistance, flyingCO2) {
    var usageData = UsageData.findOne({
      owner: Meteor.userId()
    });
    if (!usageData) {
      UsageData.insert({
        units: units,
        carDistance: carDistance,
        carType: carType,
        carEfficiency: carEfficiency,
        carCO2: carCO2,
        trainDistance: trainDistance,
        trainCO2: trainCO2,
        busDistance: busDistance,
        busCO2: busCO2,
        flyingDistance: flyingDistance,
        flyingCO2: flyingCO2,
        owner: Meteor.userId()
      });
    }
    else {
      UsageData.update({owner: Meteor.userId()},
          {
            $set: {
              units: units,
              carDistance: carDistance,
              carType: carType,
              carEfficiency: carEfficiency,
              carCO2: carCO2,
              trainDistance: trainDistance,
              trainCO2: trainCO2,
              busDistance: busDistance,
              busCO2: busCO2,
              flyingDistance: flyingDistance,
              flyingCO2: flyingCO2
            }
          });
    }
  },

  addHousingUsageData: function (electricity, electricityCO2, fuel, fuelCO2, gas, gasCO2, gasUnits, water, waterCO2) {
    var usageData = UsageData.findOne({
      owner: Meteor.userId()
    });
    if (!usageData) {
      UsageData.insert({
        electricity: electricity,
        electricityCO2: electricityCO2,
        fuel: fuel,
        fuelCO2: fuelCO2,
        gas: gas,
        gasCO2: gasCO2,
        gasUnits: gasUnits,
        water: water,
        waterCO2: waterCO2,
        owner: Meteor.userId()
      });
    }
    else {
      UsageData.update({owner: Meteor.userId()},
          {
            $set: {
              electricity: electricity,
              electricityCO2: electricityCO2,
              fuel: fuel,
              fuelCO2: fuelCO2,
              gas: gas,
              gasCO2: gasCO2,
              gasUnits: gasUnits,
              water: water,
              waterCO2: waterCO2
            }
          });
    }
  },

  addFoodUsageData: function (meat, meatCO2, poultry, poultryCO2, seafood, seafoodCO2, vegetables, vegetablesCO2, dairy, dairyCO2, drinks, drinksCO2) {
    var usageData = UsageData.findOne({
      owner: Meteor.userId()
    });
    if (!usageData) {
      UsageData.insert({
        meat: meat,
        meatCO2: meatCO2,
        poultry: poultry,
        poultryCO2: poultryCO2,
        seafood: seafood,
        seafoodCO2: seafoodCO2,
        vegetables: vegetables,
        vegetablesCO2: vegetablesCO2,
        dairy: dairy,
        dairyCO2: dairyCO2,
        drinks: drinks,
        drinksCO2: drinksCO2,
        owner: Meteor.userId()
      });
    }
    else {
      UsageData.update({owner: Meteor.userId()},
          {
            $set: {
              meat: meat,
              meatCO2: meatCO2,
              poultry: poultry,
              poultryCO2: poultryCO2,
              seafood: seafood,
              seafoodCO2: seafoodCO2,
              vegetables: vegetables,
              vegetablesCO2: vegetablesCO2,
              dairy: dairy,
              dairyCO2: dairyCO2,
              drinks: drinks,
              drinksCO2: drinksCO2
            }
          });
    }
  },

  addShoppingUsageData: function (cloth, clothCO2, furniture, furnitureCO2, healthcare, healthcareCO2, vehicle, vehicleCO2, maintenance, maintenanceCO2) {
    var usageData = UsageData.findOne({
      owner: Meteor.userId()
    });
    if (!usageData) {
      UsageData.insert({
        cloth: cloth,
        clothCO2: clothCO2,
        furniture: furniture,
        furnitureCO2: furnitureCO2,
        healthcare: healthcare,
        healthcareCO2: healthcareCO2,
        vehicle: vehicle,
        vehicleCO2: vehicleCO2,
        maintenance: maintenance,
        maintenanceCO2: maintenanceCO2,
        owner: Meteor.userId()
      });
    }
    else {
      UsageData.update({owner: Meteor.userId()},
          {
            $set: {
              cloth: cloth,
              clothCO2: clothCO2,
              furniture: furniture,
              furnitureCO2: furnitureCO2,
              healthcare: healthcare,
              healthcareCO2: healthcareCO2,
              vehicle: vehicle,
              vehicleCO2: vehicleCO2,
              maintenance: maintenance,
              maintenanceCO2: maintenanceCO2
            }
          });
    }
  }
});