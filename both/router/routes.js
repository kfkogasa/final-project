Router.route('/', {
  name: 'home'
});

Router.route('/about', {
  name: 'about'
});

Router.route('/transportationForm', {
  name: 'transportationForm'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
