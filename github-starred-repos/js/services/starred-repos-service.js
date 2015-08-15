var app = angular.module("starredRepos");

app.factory("starredReposService", ["$http", function($http) {
  var starredReposServiceData = {
    data: {
      username: "rr",
      gitdata: []
    },
    getData: function() {
      return $http.get("https://api.github.com/users/" +
          starredReposServiceData.data.username + "/starred")
        .success(function(data) {
          starredReposServiceData.data.gitdata = data;
        });
    }

  };
  return starredReposServiceData;
}])
