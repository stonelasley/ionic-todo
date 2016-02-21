angular.module('todo', ['ionic'])

  .controller('TodoCtrl', function ($scope, $ionicModal) {

    $scope.tasks = [
      {title: 'Collect coins'},
      {title: 'Eat Mushrooms'},
      {title: 'Get high enough to grab the flag'},
      {title: 'Find the Princess'}
    ];

    $ionicModal.fromTemplateUrl('new-task.html', function (modal) {

      $scope.taskModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });

    $scope.createTask = function (task) {

      $scope.tasks.push({
        title: task.title
      });

      $scope.taskModal.hide();
      task.title = '';
    };

    $scope.newTask = function () {

      $scope.taskModal.show();
    };

    $scope.closeNewTask = function () {

      $scope.taskModal.hide();
    };
  });
