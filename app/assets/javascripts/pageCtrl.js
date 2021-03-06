(function()
{
  "use strict";

  angular.module("app").controller("pageCtrl", function($scope) 
  {
    $scope.people = [
    {
      firstName: "bob",
      lastName: "loblaw",
      bio: 45,
      bioVisible: true
    },
    {
      firstName: "gob",
      lastName: "bluth",
      bio: 56,
      bioVisible: false
    },
    {
      firstName: "jon",
      lastName: "moris",
      bio: 27,
      bioVisible: true
    }];

  $scope.showBio = function(index){
    if ($scope.people[index].bioVisible == false)
    {
      $scope.people[index].bioVisible = true;
    }
    else
    {
      $scope.people[index].bioVisible = false;
    }
  };

  $scope.addPerson = function(firstName, lastName, bio) {
    var newPerson = {
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      bioVisible: true
    }

    $scope.people.push(newPerson);

  };

  $scope.deletePerson = function(index) {
    $scope.people.splice(index, 1);
  };

  $scope.toggleOrder = function(attribute) {
    if(attribute != $scope.orderAttribute) {
      $scope.descending = false;
    } else {
      $scope.descending = !$scope.descending;
    }

    $scope.orderAttribute = attribute;
  }

  $scope.getSortIcon = function(attribute) {
    if (attribute === $scope.orderAttribute){
      if ($scope.descending){
        return 'v';
      } else if ($scope.descending == false) {
          return '^';
      } else {
          return '';
      }
    }
  }



  });
})();