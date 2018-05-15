import chai, { expect } from 'chai';
import 'jsdom-global/register';
import Title from '../src/scripts/components/title/title.js';

describe('Title', () => {
	const markup = `Hello Henrique Melanda welcome to Webpack 4`;
	const markup2 = `Hello Carol Duarte welcome to Webpack 4`;

	it('Should have Title', () => {
		expect(Title).to.exist;
	})
	it('I hope Title is a function', () => {
		expect(Title).to.be.a('function');
	})
	it('Should return the last name via parameter equal to markup', () => {
		const element = document.createElement('div');
		Title('Henrique Melanda', element);
		expect(element.innerHTML).to.be.eql(markup);
	})
	it('Should return the last name via parameter equal to markup2', () => {
		const element = document.createElement('div');
		Title('Carol Duarte', element);
		expect(element.innerHTML).to.be.eql(markup2);
	})
})
