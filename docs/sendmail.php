<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

  $title = "С сайта";
  $body = '<h2>Перезвони или напиши мне!</h2>';

  if(trim(!empty($_POST['name']))){
    $body.='<p> <strong> Имя: </strong>'.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p> <strong> Почта: </strong>'.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p> <strong> Сообщение: </strong>'.$_POST['message'].'</p>';
}
if(trim(!empty($_POST['agreement']))){
    $body.='<p> <strong>Согласие на обработку данных - </strong>'.$_POST['agreement'].'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong> Телефон для связи: </strong>'.$_POST['phone'].'</p>';
}


	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('info@nastroy.moscow', 'Сообщение с сайта'); // Указать нужный E-mail
	//Кому отправить
	$mail->addAddress('info@nastroy.info'); // Указать нужный E-mail
	


  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;


	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$result = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($result);
?>