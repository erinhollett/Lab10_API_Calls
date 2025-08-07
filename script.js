// Task 1: API Interaction Using GET Requests

//Handle errors and display an error message on the page
document.getElementById('fetchDataOne').addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(post => {
          console.log(post);
          displayPost(post);
      })
      .catch (error => {
        document.getElementById('errorMessage').textContent = 'Failed to load data: ' + error.message;
      });
});

// Displaying the fetched data dynamically on website
function displayPost(post) {
  document.getElementById('postTitle').textContent = post.title;
  document.getElementById('postBody').textContent = post.body;
}