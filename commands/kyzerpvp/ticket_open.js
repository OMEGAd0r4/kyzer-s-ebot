const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class kyzer1v1Command extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'kyzerpm', 
        group: 'kyzerpvp',
        memberName: 'kyzerpm',
        description: "Got talk privately to kyzah"
      });
    }
    async run(message, args)
    {       
        if (message.guild.channels.exists("name", "pmroom " + message.author.id)) return message.channel.send("You already have a pmroom open.");
        message.guild.createChannel(`pmroom ${message.author.id}`, "text").then(c => {
            let role = message.guild.roles.find("name", "$$$");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
            });
            message.channel.send(`Your pm room has been created, ${c.name}.`);
            const embed = new Discord.RichEmbed()
            .setColor("#000000")
            .addField(`Hey ${message.author.username}!, You can now privately talk to kyzah now!`, `Thanks for your patience.`)
            .setTimestamp();
            c.send({ embed: embed });
        }).catch(console.error);
        }
}

module.exports = kyzerpmCommand;

