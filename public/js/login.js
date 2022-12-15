const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#email-address').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    console.log({ username, password })
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // console.log(response.json())
      if (response.ok) {
        document.location.replace('/');
        // console.log(response.json())
      } else {
        alert("Wrong username or password");
        // console.log(response.json())
      }
    }
  };
 
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
