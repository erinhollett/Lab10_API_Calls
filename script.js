// Task 1: API Interaction Using GET Requests

//Handle errors and display an error message on the page
document.getElementById('fetchData1').addEventListener('click', function() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(post => {
          console.log(post);
          displayPost1(post);
      })
      .catch (error => {
        document.getElementById('errorMessage1').textContent = 'Failed to load data: ' + error.message;
      });
});

// Displaying the fetched data dynamically on website
function displayPost1(post) {
  document.getElementById('postTitle1').textContent = post.title;
  document.getElementById('postBody1').textContent = post.body;
}

// Task 2: API Interaction Using XMLHttpRequest

//Handle errors and display an error message on the page
document.getElementById('fetchData2').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) { // Done
            if (xhr.status === 200) { // Success
                const post = JSON.parse(xhr.responseText);
                console.log(post);
                displayPost2(post);
            } else {
                console.error('Error fetching data:', xhr.statusText);
                document.getElementById('errorMessage2').textContent = 'Failed to load data: ' + (xhr.statusText || 'Unknown error');
            }
        }
    };
    xhr.send();
});

// Displaying the fetched data dynamically on website
function displayPost2(post) {
  document.getElementById('postTitle2').textContent = post.title;
  document.getElementById('postBody2').textContent = post.body;
}

// Task 3: Send Data Using POST
document.getElementById('postForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Getting the inputted values
  const title = document.getElementById('postTitle').value;
  const body = document.getElementById('postBody').value;

  // Adding form validation
  if (!title || !body) {
    document.getElementById('status').textContent = "Please fill out both fields before submitting";
    return;
  }

  // Fetch request with the inputted values
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title,
        body
      })
    })
    // Error handling
    .then(response => {
      if (!response.ok) {
        throw new Error (`HTTP error. Status: ${response.status}`);
      }
      // Get the server response as a json file
      return response.json();
    })
    .then(post => {
      console.log('Server responded with:', post); // for debugging (delete later)

      // Confirmation message
      document.getElementById('status').textContent = '';
      document.getElementById('status').textContent = 'Post was submitted successfully';
      
      // Display the posted form
      displayJSONPost(post);
    })
    // Confirmation message (if there's an error)
    .catch(error => {
      document.getElementById('status').textContent = 'Error: ' + error.message;
  })
})

// Displaying the fetched data dynamically on website
function displayJSONPost(post) {
  document.getElementById('responseMsg').textContent = 'Here is your submitted post from id: ' + post.id;
  document.getElementById('jsonTitle').textContent = post.title;
  document.getElementById('jsonBody').textContent = post.body;
}