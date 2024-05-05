<?php
try { // пробуем обработать и отправить информацию
	$cleanName = trim(htmlspecialchars($_REQUEST['name'])); // очищаем данные с формы от лишних пробелов и экранируем спец. символы
	$cleanTel = trim(htmlspecialchars($_REQUEST['tel']));
	$cleanEmail = filter_var(filter_var($_REQUEST['email'], FILTER_SANITIZE_EMAIL), FILTER_VALIDATE_EMAIL); // нормализуем и валидируем email
	$body = 'Имя: ' . $cleanName . PHP_EOL; // формируем тело письма
	$body .= 'Телефон: ' . $cleanTel;
	$headers = 'From: verylonghair00@gmail.com' . PHP_EOL .
    'Reply-To: verylonghair00@gmail.com' . PHP_EOL .
    'X-Mailer: PHP/' . phpversion(); // формируем заголовки
	mail($cleanEmail, 'Сообщение из формы', $body, $headers); // отправляем письмо
} catch (Exception $e) { // если ошибка, выводим ее
	echo 'Message: ' .$e->getMessage();
}
?>