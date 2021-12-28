const Discord = require('discord.js');
const client = new Discord.Client();
const token = ‘OTI1MzYyNjQyMDc4NTQ4MDIw.YcsBHg.WHGg7E45LT4FsQbiA2JoN0VFJyk’

client.once('ready', () => {
   console.log(‘Félicitations, votre bot Discord a été correctement initialisé !');
});

client.login(token);