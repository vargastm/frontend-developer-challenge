var form = document.getElementById("form-contact");
 
if (form.addEventListener) {                   
    form.addEventListener("submit", validateRegistration);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validateRegistration);
}
 
function validateRegistration(evt) {
	var name = document.getElementById('name');
    var email = document.getElementById('email');
    var filterName = /^[A-zÀ-ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-zÀ-ÿ][A-zÀ-ÿ']+$/
	var filterEmail = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/
	var countError = 0;

	nameBox = document.querySelector('.message-name');
	if(name.value == "") {
		nameBox.innerHTML = "Favor preencher o Nome";
		nameBox.style.display = 'block';
		countError += 1;
	}else if(filterName.test(name.value)) {
		nameBox.style.display = 'none';
	} else {
        nameBox.innerHTML = "Favor preencher o Nome e Sobrenome corretamente";
        nameBox.style.display = 'block';
        countError += 1;
    }
 
	emailBox = document.querySelector('.message-email');
	if(email.value == ""){
		emailBox.innerHTML = "Favor preencher o E-mail";
		emailBox.style.display = 'block';
		countError += 1;
	}else if(filterEmail.test(email.value)) {
		emailBox.style.display = 'none';
	} else {
		emailBox.innerHTML = "Formato do E-mail inválido";
		emailBox.style.display = 'block';
		countError += 1;
	}	    
 
	if(countError > 0){
		evt.preventDefault();
	}
}