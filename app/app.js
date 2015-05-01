import Ember from 'ember';

var log = Ember.Logger;
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
var urls = {};
urls.login = location.protocol + "//" + location.host + "/users/sign_in.json";
urls.register = location.protocol + "//" + location.host + "/users.json";
urls.logout = location.protocol + "//" + location.host + "/users/sign_out.json";
loadInitializers(Seanchai, config.modulePrefix);
export default Seanchai;
