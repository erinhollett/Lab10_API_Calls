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
      .catch(error => console.error('Error fetching data:', error));
  });

function displayPost(post) {
  document.getElementById('postTitle').textContent = post.title;
  document.getElementById('postBody').textContent = post.body;
  document.getElementById('postId').textContent = "Post #" + post.id;
  document.getElementById('postUserId').textContent = "Posted by user #" + post.userId;
}