//your JS code here. If required.
const form = document.getElementById("loginForm");
const userNameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

const savedUserName = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if(savedUserName && savedPassword){
	existingBtn.style.display = "block";
}

form.addEventListener("submit",function(e){
	e.preventDefault();

	const username = userNameInput.value.trim();
	const password = passwordInput.value.trim();

	if(!username || !password) return;

	alert("logged in as "+username);

	
	
	if(checkbox.checked){
		localStorage.setItem("username",username);
		localStorage.setItem("password",password);
		existingBtn.style.display="block";
	}
    else{
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existingBtn.style.display="none";
	}

});
existingBtn.addEventListener("click",function(){
	const storedUser = localStorage.getItem("username");
	if(storedUser){
		alert("logged in as "+storedUser);
	}
})







