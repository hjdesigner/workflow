import chai, { expect } from 'chai';
import Card from './index.js';

describe('Card', () => { 
	const markup = `<figure><img src="[object Object]"></figure><h1>Hello<br>Henrique Melanda<br>Welcome to Webpack 4</h1>`;
	it('Should return the last name via parameter equal to markup', () => {
		const element = document.createElement('div');
		Card('Henrique Melanda', element);
		expect(element.innerHTML).to.be.eql(markup);
	})
	it('Should have Title', () => {
		expect(Card).to.exist;
	})
	it('I hope Title is a function', () => {
		expect(Card).to.be.a('function');
	})
})
