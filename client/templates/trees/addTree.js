Template.addTree.events ({

  "click #addTree": function (){
      var theTree = document.getElementsByName('treeName').value;
      var theLocation = document.getElementsByName('location').value;
      document.getElementById("trees").innerHTML = "You added " + theTree + " in " + theLocation;
  }
});

Schemas = {};

Template.registerHelper("Schemas", Schemas);

Schemas.Person = new SimpleSchema({
  treeName: {
    type: String,
    index: 1,
    unique: true
  },
  location: {
    type: String,
    optional: true
  },
  latitude: {
    type: Number,
    optional: true
  },
  longitude: {
    type: Number,
    optional: true
  },
  diameter: {
    type: Number,
    optional: true
  }
});

var Collections = {};

Template.registerHelper("Collections", Collections);

People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);

Meteor.publish(null, function () {
  return People.find();
});

People.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});
