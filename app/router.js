import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('articles', { path: '/artikelen' }, function() {
    this.route('new', { path: '/nieuw' });
    this.route('edit', { path: '/:code/:slug' });
  });

  this.route('control', { path: '/controle' });

  this.resource('sales', { path: '/verkoop' }, function() {
    this.route('delivery', { path: '/levering' });
    this.route('stock');
    this.route('history', { path: '/geschiedenis' });
    this.route('large', { path: '/:name' });
    this.route('till', { path: '/kas' });
  });

  this.resource('sale', { path: '/nieuwe-verkoop' }, function() {
    this.route('new');
    this.route('payment');
  });

  this.resource('proms', function() {
    this.route('new');

    this.resource('prom', { path: '/:code/:slug' }, function() {
      this.route('stock');

      this.resource('transfer', { path: '/transfer_with_id' }, function() {
        this.route('new', { path: 'nieuw' });
      });

      this.route('sale', { path: 'verkoop' });
      this.resource('cash', { path: 'kas' }, function() {
        this.route('new', { path: 'nieuw' });
      });
    });
  });
});

export default Router;
