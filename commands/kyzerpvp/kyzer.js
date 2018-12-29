const commando = require('discord.js-commando');
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});

class kyzerCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'kyzer',
        group: 'kyzerpvp',
        memberName: 'kyzer',
        description: 'Shows the social medias kyzer uses'
      });
    }

    async run(message)
    {
        message.channel.send({embed: new Discord.RichEmbed()
            .setTitle("**Kyzer | Information**")
            .setColor("#000000")
            .setDescription("Kyzer is black")
            .addField("**__Background__**", "--------------------------")
            .addField("Name", "Kyzer")
            .addField("Age", 16)
            .addField("Birthday", "June 18")
            .addField("Country", "Philippines")
            .addField("**__Social Medias__**", "--------------------------")
            .addField("Steam hvh", "https://steamcommunity.com/id/kyzerhvh")
            .addField("Twitter", "https://twitter.com/kyzerhvh")
            .addField("Instagram", "n/a")
            .addField("Youtube (main)", "https://www.youtube.com/channel/UCDdebT1D15gNK13oKeSHsfQ?")
            .addField("Youtube (csgo)", "https://www.youtube.com/channel/UCTmIO9iytxLPHmhtCDcY9JQ")
            .addField("Youtube (hvh)", "https://www.youtube.com/channel/UC-8DBtg7_AaVUSxBbsQbREA")
            .addField("Playlist (youtube)", "private")
            .addField("Playlist (soundcloud)", "private")
            .addField("Pornhub", "ItzLolicopzPlayz")
            .setTimestamp()})
    }
}

module.exports = kyzerCommand;



