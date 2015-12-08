Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about'
});

Router.route('/forms', {
  name: 'forms'
});

/*
Router.route('/transportationForm', {
  name: 'transportationForm'
});

Router.route('/housingForm', {
  name: 'housingForm'
});

Router.route('/shoppingForm', {
  name: 'shoppingForm'
});

Router.route('/foodForm', {
  name: 'foodForm'
});
 */

Router.route('/addTree', {
  name: 'addTree'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard', 'forms']
});
