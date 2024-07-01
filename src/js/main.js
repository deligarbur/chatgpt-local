'use strict';

const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $template = document.querySelector('#message-template');
const $messages = document.querySelector('ul');
const $container = document.querySelector('main');

// pongo delante de la variable un símbolo de $ para indicar que es un elemento del DOM

$form.addEventListener('submit', event => {
	event.preventDefault();
	const messageText = $input.value.trim();

	if (messageText !== '') {
		//añadimos el mensaje en el DOM
		$input.value = '';
	}

	addMessage(messageText, 'user');
});

function addMessage(text, sender) {
	//clonar el template
	const clonedTemplate = $template.content.cloneNode(true);
	const $newMessage = clonedTemplate.querySelector('.message');

	const $who = $newMessage.querySelector('span');
	const $text = $newMessage.querySelector('p');

	$text.textContent = text;
	$who.textContent = sender === 'bot' ? 'GPT' : 'Tú';
	$newMessage.classList.add(sender);

	//actualizar el scroll para ir bajando

	$messages.appendChild($newMessage);
}
