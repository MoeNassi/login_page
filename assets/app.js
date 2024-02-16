const btn = document.querySelector('button')
const parent = document.querySelector('.content')
const success = document.querySelector('.success')
const content = document.querySelector('.content .inputs')
const log = document.querySelector('.under')
const failed = document.querySelector('.failed')

const username = document.querySelector('.inp_1')
const email = document.querySelector('.inp_2')
const password = document.querySelector('.inp_3')
const already = document.querySelector('.already')

function login_() {
	let i = 0;
	parent.classList.add('flow');
	setTimeout(() => parent.classList.remove('flow'), 500);
	var keys = Object.keys(localStorage)
	const btn_log = document.querySelector('.btn_')
	const head = document.querySelector('.above')
	const log_page = document.querySelector('.hide')
	const loggedEmail_ = document.querySelector('.inputs_ .inp_2')
	const loggedPass_ = document.querySelector('.inputs_ .inp_3')
	content.classList.add('shut')
	head.classList.add('shut')
	log_page.classList.add('show')
	log.classList.add('nop')
	btn_log.addEventListener('click', ()=> {
		if (loggedEmail_.value == "") {
			loggedEmail_.classList.add('error')
			setTimeout(()=> loggedEmail_.classList.remove('error'), 500)
		}
		if (loggedPass_.value == "") {
			loggedPass_.classList.add('error')
			setTimeout(()=> loggedPass_.classList.remove('error'), 500)
		}
		else {
			for (i = 0; i < keys.length; i++) {
				if (keys[i] == loggedEmail_.value) {
					if (loggedPass_.value != localStorage[loggedEmail_.value]) {
						failed.classList.add('opacity')
						setTimeout(()=> failed.classList.remove('opacity'), 500)
						break ;
					}
					else {
						success.classList.add('opacity')
						setTimeout(()=> succes.classList.remove('opacity'), document.location.href = "https://www.youtube.com/watch?v=0tOXxuLcaog", 1000)
						break ;
					}
				}
			}
			if (i == keys.length) {
				failed.classList.add('opacity')
				setTimeout(()=> failed.classList.remove('opacity'), 500)
			}
		}
	})
	document.addEventListener('keyup', (event) => {
		if (event.key == "Enter") {
			if (loggedEmail_.value == "") {
				loggedEmail_.classList.add('error')
				setTimeout(()=> loggedEmail_.classList.remove('error'), 500)
			}
			if (loggedPass_.value == "") {
				loggedPass_.classList.add('error')
				setTimeout(()=> loggedPass_.classList.remove('error'), 500)
			}
			else {
				for (i = 0; i < keys.length; i++) {
					if (keys[i] == loggedEmail_.value) {
						if (loggedPass_.value === localStorage[loggedEmail_.value]) {
							success.classList.add('opacity')
							setTimeout(()=> success.classList.remove('opacity'), document.location.href = "https://github.com/MoeNassi", 1000)
							break ;
						}
						else {
							failed.classList.add('opacity')
							setTimeout(()=> failed.classList.remove('opacity'), 500)
							break ;
						}
					}
				}
				if (i == keys.length) {
					failed.classList.add('opacity')
					setTimeout(()=> failed.classList.remove('opacity'), 500)
				}
			}
		}
	})
}
document.querySelector('.quest').addEventListener('click', ()=> {
	login_();
	return ;
})
function not_fail() {
	var keys = Object.keys(localStorage)
	for (i = 0; i < keys.length; i++) {
		if (keys[i] === email.value) {
			already.classList.add('opacity')
			setTimeout(()=> already.classList.remove('opacity'), 500)
			return 0
		}
	}
	localStorage.setItem(email.value, password.value)
	console.log(email.value, password.value)
	success.classList.add('opacity')
	setTimeout(()=> success.classList.remove('opacity'), 500)
	return 1
}
function fail() {
	failed.classList.add('opacity')
	setTimeout(()=> failed.classList.remove('opacity'), 500)
}
btn.addEventListener('click', ()=> {
	if (username.value === "") {
		username.classList.add('error')
		setTimeout(()=>username.classList.remove('error'),500)
	}
	if (email.value === "") {
		email.classList.add('error')
		setTimeout(()=>email.classList.remove('error'),500)
	}
	if (password.value === "") {
		password.classList.add('error')
		setTimeout(()=>password.classList.remove('error'),500)
	}
	if (password.value === "" || email.value === "" || username.value === "") {
		setTimeout(fail(), 500);
	}
	else {
		let exit_status;
		setTimeout((exit_status = not_fail()), 500);
		if (exit_status == 0)
			return ;
		success.classList.remove('opacity')
		login_()
	}	
});
document.addEventListener('keyup', (event) => {
	if (event.key == "Enter" && content.className.search(".shut") == -1) {
		if (username.value === "")
		{
			username.classList.add('error')
			setTimeout(()=>username.classList.remove('error'),500)
		}
		if (email.value === "")
		{
			email.classList.add('error')
			setTimeout(()=>email.classList.remove('error'),500)
		}
		if (password.value === "")
		{
			password.classList.add('error')
			setTimeout(()=>password.classList.remove('error'),500)
		}
		if (password.value === "" || email.value === "" || username.value === "") {
			failed.classList.add('opacity')
			setTimeout(()=>failed.classList.remove('opacity'), 500)
		}
		else {
			var keys = Object.keys(localStorage)
			for (i = 0; i < keys.length; i++) {
				if (keys[i] === email.value) {
					already.classList.add('opacity')
					setTimeout(()=> already.classList.remove('opacity'), 500)
					return ;
				}
			}
			setTimeout(function() {
				username.classList.remove('error')
				email.classList.remove('error')
				password.classList.remove('error')
				localStorage.setItem(email.value, password.value)
			}, 500);
			success.classList.add('opacity')
			setTimeout(()=>success.classList.remove('opacity'), 500)
			login_()
		}
	}
});

function json_file() {
	
}