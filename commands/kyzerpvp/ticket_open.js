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
        name: 'kyzer1v1', 
        group: 'kyzerpvp',
        memberName: 'kyzer1v1',
        description: "1v1 KYZER RN. KYZER IS EZ. GO GET HIM"
      });
    }
    async run(message, args)
    {       
        if (message.guild.channels.exists("name", "1v1 " + message.author.id)) return message.channel.send("You already have a ticket open.");
        message.guild.createChannel(`1v1 ${message.author.id}`, "text").then(c => {
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
            message.channel.send(`GO FIGHT KYZER HE IS EZ ASF. YOU AND KYZER HAVE SUCCESSFULLY BEEN TELEPORTED TO KYZER'S DUNGEON, ${c.name}.`);
            const embed = new Discord.RichEmbed()
            .setColor("#000000")
            .addField(`Hey ${message.author.username}!, Your arena has been created, you have been teleported. Pot up your speed pots and fire res, go 28 pot him`, `Thanks for your patience.`)
            .setTimestamp();
            c.send({ embed: embed });
        }).catch(console.error);
        }
}

module.exports = ticketCommand;

