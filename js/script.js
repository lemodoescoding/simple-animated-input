const inputForm = document.querySelector('.wrapper .input-box input');
const pInputForm = inputForm.parentNode;

inputForm.addEventListener('input', (e) => {
	if(inputForm.value !== ""){
		pInputForm.classList.add("active");
	} else if(inputForm.value === "") {
		pInputForm.classList.remove("active");
	}
});
