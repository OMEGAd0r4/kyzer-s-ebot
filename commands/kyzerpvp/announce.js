const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class announce2Command extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'announce', 
      group: 'kyzerpvp',
      memberName: 'announce',
      description: "Announces a message for Lolicop"
    });
  }

  async run (message, args)
  {
    let announcementargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
    let announcementmessage = announcementargs.join(" ").slice(9);

    let announcementschannel = message.guild.channels.find(`name`, "announcements");
    if(!announcementschannel) return message.channel.send("Couldn't find the announcements channel");
    var supportteamrole = message.guild.roles.find(`name`, "$$$");
    if (!message.member.roles.has(supportteamrole.id)) return message.channel.send("TAKE L U IS NO $$$ MEMBER HAAHAHA ")

    var announcementmessageembed = new Discord.RichEmbed()
    .setTitle("**LOLICOP | Announcement**")
    .setColor("#000000")
    .addField("**__Announcement__**", `${announcementmessage}`)
    .setImage("https://cdn.discordapp.com/attachments/525200110049689600/526677259231297546/tlzf7otr80911.png")
    .setTimestamp()
    
    announcementschannel.send(announcementmessageembed);
    announcementschannel.send("@everyone @here")
  }
}

module.exports = announceCommand;
