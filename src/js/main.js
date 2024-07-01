const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $template = document.querySelector('#message-template');
const $messages = document.querySelector('ul');
const $container = document.querySelector('main');

// pongo delante de la variable un símbolo de $ para indicar que es un elemento del DOM

$form.addEventListener('submit', event => {
	event.preventDefault();
});
