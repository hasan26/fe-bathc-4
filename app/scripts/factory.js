var URLBase = 'http://reduxblog.herokuapp.com/api';
myApp
  .factory('firstFactory', ['$http', function ($http) {
    var API = {
      postArticle: function(data) {
        return $http.post(URLBase + '/posts', data);
      },
      getAllArticle: function(data) {
        return $http.get(URLBase + '/posts');
      },
      getOneArticle: function(id) {
        return $http.get(URLBase + '/posts/' + id);
      },
      deleteOneArticle: function(id) {
        return $http.delete(URLBase + '/posts/' + id);
      },
    }
  }])
