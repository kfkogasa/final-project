/**
 * Created by kkoneko on 11/26/2015.
 */

UsageData.allow({
  insert: function (userId, doc) {
    return (userId && doc.user === userId);
  },

  update: function (userId, doc, fields, modifier) {
    return (userId && doc.user === userId);
  }
});