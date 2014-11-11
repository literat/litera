<?php

use Nette\Application\Routers\Route;
use Nette\Forms\Form;
use Nette\Mail\Message;

// Load libraries
require __DIR__ . '/app/libs/nette.phar';
require __DIR__ . '/app/libs/texy.min.php';

$configurator = new Nette\Configurator;

// Enable Nette Debugger for error visualisation & logging
$configurator->enableDebugger(__DIR__ . '/app/temp/log');

// Configure libraries
$configurator->setTempDirectory(__DIR__ . '/app/temp');

// Create Dependency Injection container from config.neon file
$configurator->addConfig(__DIR__ . '/app/config/config.neon', $configurator::AUTO);
$container = $configurator->createContainer();

    /**
     * Process contact form, send message
     * @param Form
     */
/*    function processContactForm(Form $form)
    {
        $values = $form->getValues(TRUE);

        $message = new Message;
        $message->addTo('test@gmail.com')
            ->setFrom($values['email'])
            ->setSubject('Zpráva z kontaktního formuláře')
            ->setBody($values['message'])
            ->send();

        $this->flashMessage('Zpráva byla odeslána');
        $this->redirect('this');
    }
*/
// Setup routes
// http://kegege.net/[cs|en]
$router = $container->getService('router');
$router[] = new Route('[<lang (?-i)cs|en>]', function($presenter, $lang) use ($container) {
    if (!$lang) {
        $lang = $container->getService('httpRequest')->detectLanguage(array('en', 'cs')) ? : 'cs';

        return $presenter->redirectUrl($lang);
    }

    // create template
    $template = $presenter->createTemplate()->setFile(__DIR__ . '/app/templates/' . $lang . '.latte');
/*
    $form = new Form;
    $form->addText('name', 'Jméno:')
            ->addRule(Form::FILLED, 'Zadejte jméno');
    $form->addText('email', 'Email:')
            ->addRule(Form::FILLED, 'Zadejte email')
            ->addRule(Form::EMAIL, 'Email nemá správný formát');
    $form->addTextarea('message', 'Zpráva:')
            ->addRule(Form::FILLED, 'Zadejte zprávu');
    $form->addSubmit('send', 'Odeslat');

    $form->onSuccess[] = processContactForm($form);
*/
    // register template helpers like {$foo|date}
    $template->registerHelper('date', function($date) use ($lang) {
        if ($lang === 'en') {
            return date('F j, Y', (int) $date);
        } else {
            static $months = array(1 => 'leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec');
            $date = getdate((int) $date);

            return "$date[mday]. {$months[$date['mon']]} $date[year]";
        }
    });

    $template->registerHelper('texy', array(new Texy, 'process'));

    return $template;
});

// http://davidgrudl.com/sources
$router[] = new Route('sources', function($presenter) {

    $template = $presenter->createTemplate()
        ->setFile(__DIR__ . '/app/templates/sources.latte');

    $template->registerHelper('source', function($file, $lang = NULL) {
        return preg_replace('#<br ?/?>#', '', highlight_file($file, TRUE));
    });
    return $template;
});

// Run the application!
$container->getService('application')->run();
