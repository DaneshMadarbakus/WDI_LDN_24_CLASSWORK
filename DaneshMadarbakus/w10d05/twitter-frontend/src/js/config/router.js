angular
  .module('twitter')
  .config(Router);

Router.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
function Router($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('postsIndex', {
      url: '/posts',
      templateUrl: 'js/views/posts/index.html',
      controller: 'PostsIndexCtrl as postsIndex'
    })
    .state('postsNew', {
      url: '/posts/new',
      templateUrl: 'js/views/posts/new.html',
      controller: 'PostsNewCtrl as postsNew'
    })
    .state('postsShow', {
      url: '/posts/:id',
      templateUrl: 'js/views/posts/show.html',
      controller: 'PostsShowCtrl as postsShow'
    })
    .state('postsUpdate', {
      url: '/posts/:id/update',
      templateUrl: 'js/views/posts/update.html',
      controller: 'PostsUpdateCtrl as postsUpdate'
    });

  $urlRouterProvider.otherwise('/posts');
}
