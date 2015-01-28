(function() {
  'use strict';

  var dataUrl = "https://api.github.com/users/dstncharles";

  // var myGitHubAddress = "https://api.github.com/users/dstncharles/repos"
  // var githubUrl = myGitHubAddress + "?access_token=" + window.token;


  //1.Build HTML for skeleton of page
  //2.Determin what needs templated
  ////repos
  ////profiles
  ////organzation
  //3.Fetch repo data form API using AJAX
  //4.forEach data console.log(title,date)
  //5.creat one template for a repository
  //6.forEach data for each respository log template string
  //7.Render on page
  //

  $(document).ready(function() {
    if (typeof githubToken !== 'undefined') {
      $.ajaxSetup({
        headers: {
          'Authorization': 'token ' + githubToken
        }
      });
    }
    var repoTemplate = _.template($('[data-template-name=repo]').text());
    console.log(repoTemplate);
    var $repositoryUl = $(".repositories");
    console.log($repositoryUl);
    $.ajax(dataUrl + "/repos").done(function(reposArray) {
      _.each(reposArray, function(repoObject) {
        console.log(repoTemplate(repoObject));
        $repositoryUl.append(repoTemplate(repoObject));
        // console.log(repoObject);
      });
    });
  });




})();
