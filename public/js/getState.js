

const getState = async () => {
    // event.preventDefault();
  
    // Collect values from the login form

      // Send a POST request to the API endpoint
      const response = await fetch('/api/getstate', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
     
      const message = await response.json()
      return message
    };


    console.log(getState().then((res)=>console.log(res)));

    getState().then((res)=>{

        document.getElementById("displayUsername").innerHTML=res.username
  

    })

//   document
//     .querySelector('.login-form')
//     .addEventListener('submit', );

