<?php

/*
* @name        JMY CORE
* @link        https://jmy.su/
* @copyright   Copyright (C) 2012-2019 JMY LTD
* @license     LICENSE.txt (see attached file)
* @version     VERSION.txt (see attached file)
* @author      Komarov Ivan
*/

function commandExec($command)
{
  ob_start();
  system($command . " 2>&1", $result);

  $contents = ob_get_contents();
  ob_end_clean();

  return $contents;
}

function validateGithubWebhook($known_token)
{
  if (!isset($_SERVER['HTTP_X_HUB_SIGNATURE']) || $_SERVER['HTTP_X_HUB_SIGNATURE'] == null) {
    throw new \Exception('Header not set');
  } else {
    $signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
  }

  $signature_parts = explode('=', $signature);

  if (count($signature_parts) != 2) {
    throw new \Exception('signature has invalid format');
  }
  $rawPost = file_get_contents('php://input');
  $known_signature = hash_hmac('sha1', $rawPost, $known_token);

  if (!hash_equals($known_signature, $signature_parts[1])) {
    throw new \Exception('Could not verify request signature ' . $signature_parts[1]);
  } else {
    $rawPost = null;
    switch ($_SERVER['CONTENT_TYPE']) {
      case 'application/json':
        $json = $rawPost ?: file_get_contents('php://input');
        break;

      case 'application/x-www-form-urlencoded':
        $json = $_POST['payload'];
        break;

      default:
        throw new \Exception("Unsupported content type: $_SERVER[CONTENT_TYPE]");
    }
    $rrr = json_decode($json);
    if ($rrr->ref == 'refs/heads/main') {
      commandExec('git pull');
      // commandExec('npm run build');
    }
  }
}

validateGithubWebhook('c8iE_QyR_jYHxJrc8iE_QyR_jYHxJrc8iE_QyR_jYHxJr');