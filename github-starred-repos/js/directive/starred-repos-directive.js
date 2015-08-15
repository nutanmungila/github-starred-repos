var app = angular.module("starredRepos");

app.directive("searchBox", [function($scope) {
  return {
    restrict: 'E',
    templateUrl: "/templates/search-box.html",
    controller: ["$scope", "starredReposService", function($scope,
      starredReposService) {
      $scope.onClickButton = function() {
        starredReposService.data.username = $scope.username;
        $scope.reposServiceData = starredReposService.data;
        starredReposService.getData();
      }
    }]
  };
}]);


app.directive("displayBox", [function() {
  return {
    restrict: 'E',
    templateUrl: "/templates/display-box.html",
    controller: ["$scope", "starredReposService", function($scope,
      starredReposService) {
      $scope.reposdisplayData = starredReposService.data;
      console.log($scope.reposdisplayData.gitdata);
    }]
  };
}]);
