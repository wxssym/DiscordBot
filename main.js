const Discord = require("discord.js");
const config = require("./config.json");
const { join } = require('path');
const { joinVoiceChannel, createAudioResource , AudioPlayer , AudioPlayerStatus} = require('@discordjs/voice');

const { Client, Intents } = require('discord.js');
const { fontcolor } = require("ffmpeg-static");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

const keywords1 = ['joe','who joe', 'joe who', 'who joe ?', 'who joe?','joe who ?','joe who?', 'who is the president of the united states?'];
const keywords2 = ['merica!'];
const keywords3 = ['joe a joke','joke us biden','tell us a joke joe'];
const jokes = ['Once i met trump, now am a president', 'The real joe biden is officermeem','i hate you server ngl','it sucks to be you'];
client.on("message", message => {
    var message_content = message.content;
    player = new AudioPlayer();
    if (keywords1.includes(message_content.toLowerCase())) {
        message.channel.send("BIIIIDEEEN");

    } else if (keywords2.includes(message_content.toLowerCase())) {
        message.channel.send("FUCK YEAH!!");

    } else if (keywords3.includes(message_content.toLowerCase())) {

        message.channel.send(jokes[Math.floor(Math.random() * 4)]);

    } else if (message_content.toLowerCase()=== 'joe.mp3'){

        connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        
                 
        let resource = createAudioResource(join('audio/joebiden.mp3'));
        connection.subscribe(player);
        player.play(resource);



    }
    player.on(AudioPlayerStatus.Idle, () => {
        console.log('i worked but somehow not');
        connection.disconnect();
    });
})


client.login(config.BOT_TOKEN);