const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
    console.log(message.body)
    if (message.body === '!ping') {
        message.reply('pong');
    }
});

client.initialize();
//puppeteer debaixo dos panos roda um navegador anonimo escondido, acessando um whatsapp web
//gerando um qrcode para lá, para poder acessar
