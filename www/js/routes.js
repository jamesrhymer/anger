angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.favorites', {
    url: '/favorites',
    views: {
      'tab1': {
        templateUrl: 'templates/favorites.html',
        controller: 'favoritesCtrl'
      }
    }
  })

  .state('tabsController.start', {
    url: '/start',
    views: {
      'tab2': {
        templateUrl: 'templates/start.html',
        controller: 'startCtrl'
      }
    }
  })

  .state('tabsController.account', {
    url: '/account',
    views: {
      'tab3': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('signupUsername', {
    url: '/signup-username',
    templateUrl: 'templates/signupUsername.html',
    controller: 'signupUsernameCtrl'
  })

  .state('signupPassword', {
    url: '/signup-password',
    templateUrl: 'templates/signupPassword.html',
    controller: 'signupPasswordCtrl'
  })

  .state('signupParent', {
    url: '/signup-parent',
    templateUrl: 'templates/signupParent.html',
    controller: 'signupParentCtrl'
  })

  .state('signupFriend', {
    url: '/signup-friend',
    templateUrl: 'templates/signupFriend.html',
    controller: 'signupFriendCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signupGender', {
    url: '/signup-gender',
    templateUrl: 'templates/signupGender.html',
    controller: 'signupGenderCtrl'
  })

  .state('rating', {
    url: '/rating',
    templateUrl: 'templates/rating.html',
    controller: 'ratingCtrl'
  })

  .state('postRating', {
    url: '/rating-post',
    templateUrl: 'templates/postRating.html',
    controller: 'postRatingCtrl'
  })

  .state('tabsController.context', {
    url: '/context',
    views: {
      'tab2': {
        templateUrl: 'templates/context.html',
        controller: 'contextCtrl'
      }
    }
  })

  .state('tabsController.problem', {
    url: '/problems',
    views: {
      'tab2': {
        templateUrl: 'templates/problem.html',
        controller: 'problemCtrl'
      }
    }
  })

  .state('tabsController.activity', {
    url: '/activity',
    views: {
      'tab2': {
        templateUrl: 'templates/activity.html',
        controller: 'activityCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});