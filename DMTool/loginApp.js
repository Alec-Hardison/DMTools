$(document).ready(function()
{
		function user(name,password)
		{
			this.name = name;
			this.password = password;
		}
	$("#save").click(function()
	{
		var name = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		if(window.localStorage.getItem(name) != null)
		{
			alert("please pick a different username");
		
		}
		else 
		{
			var person = new user(name,password)
			window.localStorage.setItem(person.name,person);
			console.log(window.localStorage.getItem(person.name));
			window.location.replace("index.html");
		}
	});
	
	
});