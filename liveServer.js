
const {enable} = require('colors');
const liveServer = require('live-server');

const params = {
	port: 9000,
	host: '127.0.0.1',
	root: './',
	wait: 400,
	cors: enable,
};

liveServer.start(params);
