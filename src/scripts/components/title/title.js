export default function Title(name, element) {
	const nameUser = name;
	const elementHTML = element;
	const markup = `Hello ${nameUser} welcome to Webpack 4`;
	elementHTML.innerHTML = markup;
}
