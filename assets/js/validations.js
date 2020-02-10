const form = document.getElementById("form-contact");
 
if (form.addEventListener) {                   
    form.addEventListener("submit", validateRegistration);
} else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validateRegistration);
}

function validateRegistration(event) {
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const nameBox = document.querySelector('.message-name');
	const emailBox = document.querySelector('.message-email');
    const filterName = /^[A-zÀ-ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-zÀ-ÿ][A-zÀ-ÿ']+$/;
	const filterEmail = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}/;
	
	const validateName = validateInput(name, nameBox, filterName);
	const validateEmail = validateInput(email, emailBox, filterEmail);

	if(!validateName || !validateEmail) {
		event.preventDefault();
	}
}

function validateInput(input, box, filter) {
	if (!input.value) {
		box.innerHTML = "Este campo não pode ser vazio!";
		box.style.display = 'block';
		return false;
	}
	if (filter.test(input.value)) {
		box.style.display = 'none';
		return true;
	}
	box.innerHTML = "Favor preencher o campo corretamente";
	box.style.display = 'block';
	return false;
}