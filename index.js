'use strict'

function getGithubHandle() {

fetch('https://api.github.com/users/stevenr/repos')
 .then (response =>response.json())
  .then(responseJson => updateRepoNames(responseJson))
  .catch(error => alert('Something went wrong. Try again later.'));
}

function updateRepos(reponseJson){
    console.log(response.Json);
    for(let i=0;i<response.Json.length;i++){
        $('#results-list').append(`
    <li><span>${response.Json[i].name}</span>
    <span><a href="https://github.com/${responseJson[i].full_name}" style="color: blue">https://github.com/${responseJson[i].full_name}</span>
    </li>`);
  }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        
        getHithubHandle();
    });
}

$(getGithubHandle)