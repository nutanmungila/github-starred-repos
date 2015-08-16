var app = angular.module("starredRepos");

app.factory("starredReposService", ["$http", function($http) {
  var starredReposServiceData = {
    data: {
      gitdata: []
    },
    getData: function(uname) {
      return $http.get("https://api.github.com/users/" +
          uname + "/starred")
        .success(function(data) {
          starredReposServiceData.data.gitdata = data;
        });
    }

  };
  return starredReposServiceData;
}])
