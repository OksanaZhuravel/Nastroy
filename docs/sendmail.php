<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
  use PHPMailer\PHPMailer\SMTP;

  require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
  require 'phpmailer/src/SMTP.php';

  // $name = $_POST['name'];
  // $email = $_POST['email'];
  // $text = $_POST['message'];
  // $check = $_POST['agreement'];
  // $phone = $_POST['phone'];

  $title = "С сайта";
  $body = '<h2>Перезвони или напиши мне!</h2>';
  // $body = "
  // <h2>Перезвони или напиши мне</h2>

  // ";
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
		$body.='<p> <strong>Согласие на обработку данных</strong>'.$_POST['agreement'].'</p>';
	}
   if(trim(!empty($_POST['phone']))){
		$body.='<p> <strong> Телефон для связи: </strong>'.$_POST['phone'].'</p>';
	}
  $mail = new PHPMailer();

      $mail->isSMTP();   
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth = true;
      // $mail->SMTPDebug = 0;
    //  $mail->SMTPDebug = 2;
      // Настройки вашей почты
      $mail->Host = 'ssl://smtp.mail.ru';
      $mail->Username   = 'nastroy.test@mail.ru'; // Логин на почте
      $mail->Password   = 'HFPpy6WFXBx6GvftWKrt'; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
      $mail->setFrom('nastroy.test@mail.ru', 'Новое с сайта'); // Адрес самой почты и имя отправителя
      // NASMOSKVA* пароль nastroy.test@mail.ru
      // Получатель письма
      $mail->addAddress('nastroy.test@mail.ru');  

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;
  $mail->msgHTML($body);
  // Проверяем отравленность сообщения

  if ($mail->send()) {$result = "Данные отправлены!";}
  else {$result = "Ошибка";}

  // Отображение результата
  echo json_encode(["result" => $result]);
?>