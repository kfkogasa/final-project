/**
 * Created by kkoneko on 11/26/2015.
 */

Meteor.methods({

  //transportation does not have motorcycleDistance yet
  addTransportationUsageData: function (units, carDistance, carType, carEfficiency, trainDistance, busDistance, flyingDistance) {
    var usageData = UsageData.findOne({
      owner: Meteor.userId()
    });
    if (!usageData) {
      UsageData.insert({
        units: units,
        carDistance: carDistance,
        carType: carType,
        carEfficiency: carEfficiency,
        trainDistance: trainDistance,
        busDistance: busDistance,
        flyingDistance: flyingDistance,
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
              trainDistance: trainDistance,
              busDistance: busDistance,
              flyingDistance: flyingDistance
            }
          });
    }
  }
});