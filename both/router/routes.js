Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about'
});

Router.route('/transportationForm', {
  name: 'transportationForm'
});

Router.route('/shoppingForm', {
  name: 'shoppingForm'
});

Router.route('/foodForm', {
  name: 'foodForm'
});

Router.route('/housingForm', {
  name: 'housingForm'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
