app.controller("PostsController", function ($scope) {
  $scope.posts = [
    {
      author: "You",
      title: "Forever",
      url: "http://www.planwallpaper.com/static/images/image5_170127819.jpg",
      description: "Fishing!"
    },
    {
      author: "Me",
      title: "Magritte Rules",
      url: "http://www.magritte.be/fondation/wp-content/uploads/2012/02/7.jpg",
      description: "Man in bowler hat. A classic."
    },
    {
      author: "Us",
      title: "Love",
      url: "http://c300221.r21.cf1.rackcdn.com/l39arte-del-bacio-ren-magritte-freemaninrealworld-1385848298_org.jpg",
      description: "blind date"
    }
  ]

  $scope.addPost = function () {
    $scope.posts.push($scope.post);
    $scope.post = {};
    $scope.toggleForm();
  }
})
