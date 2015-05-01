import LoginStateManager from 'seanchai-client/utils/login-state-manager';

import Ember from 'ember';

var AuthenticationManager = Ember.StateManager.extend({

  login: function (controller) {
    return $.ajax({
      url: urls.login,
      type: "POST",
      data: {
        "user[username]": controller.get('username'),
        "user[password]": controller.get('password')
      },
      success: function (data, status, jqXHR) {
        log.log("Login Msg " + data.user.dummy_msg);
        var currentUser = controller.store.find('user', data.user.username);
        LoginStateManager.transitionTo("authenticated");
        $('meta[name="csrf-token"]').attr('content', jqXHR.getResponseHeader('X-CSRF-Token'));
        controller.get('store').unloadAll('story');
        return controller.transitionToRoute('home');
      },
      error: function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status === 401) {
          return controller.set("errorMsg", "That email/password combo didn't work.  Please try again");
        } else if (jqXHR.status === 406) {
          return controller.set("errorMsg", "Request not acceptable (406):  make sure Devise responds to JSON.");
        } else {
          return p("Login Error: " + jqXHR.status + " | " + errorThrown);
        }
      }
    });
  },
  register: function (controller) {
    return $.ajax({
      url: urls.register,
      type: "POST",
      data: {
        "user[username]": controller.get('username'),
        "user[email]": controller.get('email'),
        "user[password]": controller.get('password'),
        "user[password_confirmation]": controller.get('password_confirmation'),
        "user[selected_role]": controller.get('selected_role')
      },
      success: function (data, status, jqXHR) {
        var currentUser = controller.store.find('user', data.user.username);
        LoginStateManager.transitionTo("authenticated");
        return controller.transitionToRoute('home');
      },
      error: function (jqXHR, textStatus, errorThrown) {
        var jsonResponse = jQuery.parseJSON(jqXHR.responseText);
        var errorMessage = "";
        if (jsonResponse.errors.username !== undefined) {
          errorMessage += "<li>A user already exists with this username.</li>";
        }
        if (jsonResponse.errors.email !== undefined) {
          errorMessage += "<li>A user already exists with this email address.</li>";
        }
        if (jsonResponse.errors.password !== undefined) {
          errorMessage += "<li>Your password must be at least 8 characters.</li>";
        }
        if (jsonResponse.errors.role !== undefined) {
          errorMessage += "<li>Please chose whether you want to be a reader or a creator.</li>";
        }
        return controller.set("errorMsg", "<ul>" + errorMessage + "</ul>");
      }
    });
  },
  logout: function (controller, transition) {
    log.info("Logging out...");
    return $.ajax({
      url: urls.logout,
      type: "DELETE",
      dataType: "json",
      success: function (data, textStatus, jqXHR) {
        $('meta[name="csrf-token"]').attr('content', data['csrf-token']);
        $('meta[name="csrf-param"]').attr('content', data['csrf-param']);
        log.info("Logged out on server");
        var currentUser = null;
        LoginStateManager.transitionTo('notAuthenticated');
        //controller.get('store').unloadAll('story_section');
        controller.get('store').unloadAll('story');
        controller.get('store').unloadAll('story_section');
        controller.get('store').unloadAll('user');
        return transition();
      },
      error: function (jqXHR, textStatus, errorThrown) {
        return alert("Error logging out: " + errorThrown);
      }
    });
  }
});

export default AuthenticationManager
