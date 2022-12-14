function signUp() {
  FromContainer.innerHTML = ` <form method="get" accept-charset="utf-8">
<br> <br>
<input type="text" placeholder="Name" required="required" />
<input type="email" placeholder="Email" required="required" />
<input type="number" placeholder="Mobile" required="required" />
<input type="password" placeholder="Password" required="required" />
<input type="password" placeholder="Confirm Password" required="required" />
<br>
<button type="submit">Submit</button>
</form> 
`;
FormContainer.style.background = '#00b3ef';
signUpBtn.style.background = '#00b3ef';
loginBtns.style.background = 'white';
};
