import image from './naruto.png';
import './card.scss';

export default function Card(name, element) {
	const nameUser = name;
	const elementHTML = element;
	const markup = `<figure><img src="${image}"></figure><h1>Hello<br>${nameUser}<br>Welcome to Webpack 4</h1>`;
	elementHTML.innerHTML = markup;
}
