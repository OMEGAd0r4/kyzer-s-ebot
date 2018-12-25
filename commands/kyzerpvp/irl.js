const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class irlCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'irl', 
      group: 'kyzerpvp',
      memberName: 'irl',
      description: "Lolicop gets exposed"
    });
  }

  async run(message)
  {
      var irls = ["https://cdn.discordapp.com/attachments/525200110049689600/526677259231297546/tlzf7otr80911.png", "https://cdn.discordapp.com/attachments/525200110049689600/526677177928777739/Z.png"];

      message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Lolicop's IRL**")
        .setColor("#000000")
        .addField("Kyzer is obviously black", "->")
        .setImage(irls[Math.floor(Math.random() * irls.length)])})
  }
}

module.exports = irlCommand;
