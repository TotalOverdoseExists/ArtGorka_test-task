document.addEventListener('DOMContentLoaded', () => { // ждем, когда весь DOM загрузится
	let form = document.querySelector('form')

	document.querySelector('#buttonGET').addEventListener('click', (e) => { // вешаем слушатели на кнопки, чтобы менять метод отправки
		e.preventDefault()
		form.method = 'get'
	})

	document.querySelector('#buttonPOST').addEventListener('click', (e) => { // вешаем слушатели на кнопки, чтобы менять метод отправки
		e.preventDefault()
		form.method = 'post'
	})

	form.addEventListener('submit', (e) => { // добавляет слушатель на форму
		e.preventDefault() // отменяем стандартное поведение для формы, чтобы страница не перезагружалась
		let formData = new FormData(e.target) // забираем данные из формы

		if(e.target.method === 'get') {
			fetch(e.target.action + '?name=' + formData.get('name') + '&tel=' + formData.get('tel') + '&email=' + formData.get('email'), {  // асинхронно отправляем данные в обработчик (GET)
				method: e.target.method,
				mode: 'no-cors' // отключаем cors, так как нет межсерверного взаимодействия
			})
			.then((response) => {
				if (response.ok) {
					console.log(response) // выводим в консоль ответ, если успешно
					alert('Форма отправлена!') // оповещаем пользователя о том, что форма отправлена
					e.target.reset() // очищаем форму	
				}
			})
			.catch((error) => {
				console.error(error) // выводим в консоль ошибку, если что-то не так
				alert('Ошибка, попробуйте позже!') // оповещаем пользователя об ошибке
			})
		}

		if(e.target.method === 'post') {
			fetch(e.target.action, { // асинхронно отправляем данные в обработчик (POST)
				method: e.target.method,
				mode: 'no-cors', // отключаем cors, так как нет межсерверного взаимодействия
				body: formData
			})
			.then((response) => {
				if (response.ok) {
					console.log(response) // выводим в консоль ответ, если успешно
					alert('Форма отправлена!') // оповещаем пользователя о том, что форма отправлена
					e.target.reset() // очищаем форму	
				}
			})
			.catch((error) => {
				console.error(error) // выводим в консоль ошибку, если что-то не так
				alert('Ошибка, попробуйте позже!') // оповещаем пользователя об ошибке
			})
		}
	})
})