const Discord = require("discord.js");
const config = require("./config.json");
const { join } = require('path');
const { joinVoiceChannel, createAudioResource , AudioPlayer , AudioPlayerStatus} = require('@discordjs/voice');

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

const keywords = ['joe','who joe', 'joe who', 'who joe ?', 'who joe?','joe who ?','joe who?', 'who is the president of the united states?','merica!']

client.on("message", message => {
    var message_content = message.content;
    if (keywords.includes(message_content.toLowerCase())) {
        message.channel.send("BIIIIDEEEN");

    } else if (message_content.toLowerCase()=== 'joe.mp3'){

        connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        
                 
        let resource = createAudioResource(join('audio/joebiden.mp3'));
        player = new AudioPlayer();
        connection.subscribe(player);
        player.play(resource);
    }

    player.on(AudioPlayerStatus.Idle, () => {
        connection.disconnect();
    });
})


client.login(config.BOT_TOKEN);