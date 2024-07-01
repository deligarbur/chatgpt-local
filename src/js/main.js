import { CreateMLCEngine } from 'https://esm.run/@mlc-ai/web-llm';

const SELECTED_MODEL = 'gemma-2b-it-q4f32_1-MLC';

const engine = await CreateMLCEngine(SELECTED_MODEL, {
	initProgressCallback: info => {
		console.log('initProgressCallback', info);
	},
});

// pongo delante de la variable un símbolo de $ para indicar que es un elemento del DOM
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $template = document.querySelector('#message-template');
const $messages = document.querySelector('ul');
const $container = document.querySelector('main');

$form.addEventListener('submit', event => {
	event.preventDefault();
	//limpiamos el mensaje de usuario eliminando los espacios de adelante y atrás con un trim()
	const messageText = $input.value.trim();

	if (messageText !== '') {
		//añadimos el mensaje en el DOM y reset del campo del input
		addMessage(messageText, 'user');
		$input.value = '';
	}

	$button.setAttribute('disabled', true);

	//simulamos la respuesta del bot
	setTimeout(() => {
		addMessage('Hola, como estás', 'bot');
		$button.removeAttribute('disabled');
	}, 2000);
});

function addMessage(text, sender) {
	//clonar el template en modo copia profunda para poder reutilizar el template, importante incluir el cloneNode(true)
	const clonedTemplate = $template.content.cloneNode(true);
	//recuperamos el li con clase message
	const $newMessage = clonedTemplate.querySelector('.message');
	//del li, recuperamos el span y p
	const $who = $newMessage.querySelector('span');
	const $text = $newMessage.querySelector('p');

	$text.textContent = text;
	//en función de la clase, me coge la info como si fuera el bot o el usuario
	$who.textContent = sender === 'bot' ? 'GPT' : 'Tú';
	$newMessage.classList.add(sender);
	//el nuevo mensaje se mete en el DOM
	$messages.appendChild($newMessage);
	//actualizar el scroll para ir bajando
	$container.scrollTop = $container.scrollHeight;
}
