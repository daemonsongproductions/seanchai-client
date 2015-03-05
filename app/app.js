import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var Seanchai = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_BINDINGS: true,
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.Inflector.inflector.irregular('current_user', 'current_user');
Seanchai.urls || (Seanchai.urls = {});
Seanchai.urls.login = location.protocol + "//" + location.host + "/users/sign_in.json";
Seanchai.urls.register = location.protocol + "//" + location.host + "/users.json";
Seanchai.urls.logout = location.protocol + "//" + location.host + "/users/sign_out.json";

window.log = Em.Logger;

loadInitializers(Seanchai, config.modulePrefix);

export default Seanchai;
