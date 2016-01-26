"use strict";

angular.module('movieApp')
  .controller('mainController', ['$http', mainController]);

function mainController($http) {

  var vm = this;
  vm.onClick = onClick;

  function onClick(title) {

    var config = {
      method: 'GET',
      url: 'http://www.omdbapi.com/?t=' + title + '&y=&plot=short&r=json'
    };

    $http(config).then(onSuccess, onFailure);

    function onSuccess(response) {
      console.log(response);
      vm.display = response;
    }

    function onFailure(response) {
      console.log(response);
      vm.display = response;
    }

  }
}
