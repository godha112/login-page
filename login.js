document.getElementById('submit-button').onclick = function(){
	if(document.getElementById('name').value == '' || document.getElementById('password').value == ''){
		alert("enter all the required details!!!");
	}
	else{
		console.log("name of the person : " + document.getElementById('name').value);
		document.getElementById('name').value = '';
		console.log("password of the person - " + document.getElementById('password').value);
		document.getElementById('password').value = '';
		console.log("skills of the person are - " );
		if(document.getElementById('html').checked){
			console.log(document.getElementById('html').value);
			document.getElementById('html').checked = false;
		} 
		if(document.getElementById('css').checked){
			console.log(document.getElementById('css').value);
			document.getElementById('css').checked = false;
		}
		if(document.getElementById('js').checked){
			console.log(document.getElementById('js').value);
			document.getElementById('js').checked = false;
		}
		console.log("gender of the person - ");
		if(document.getElementById('girl').checked){
			console.log(document.getElementById('girl').value);
			document.getElementById('girl').checked = false;
		}
		if(document.getElementById('boy').checked){
			console.log(document.getElementById('boy').value);
			document.getElementById('boy').checked = false;
		}
		console.log("country - " + document.getElementById('country').value);
    }
}