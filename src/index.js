#! /usr/bin/env node

const boxen = require('boxen');
const { bold, green } = require('chalk').default;

const lines = [
  `${bold('Miloš Sutanovac')} / ${green('@mixn')}`,
  'Software Developer & Consultant',
  '',
  `${bold('Twitter')}    ${green.underline('https://twitter.com/mixn')}`,
  `${bold('GitHub')}     ${green.underline('https://github.com/mixn')}`,
  `${bold('Web')}        ${green.underline('https://mixn.io')}`,
  `${bold('Instagram')}  ${green.underline('https://instagram.com/mixn')}`,
];

process.stdout.write(
	boxen(lines.join('\n'), {
		borderColor: 'blue',
		borderStyle: 'double',
		margin: 1,
		padding: 1,
	}),
);
