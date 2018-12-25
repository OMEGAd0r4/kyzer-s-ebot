const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class announceCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'announce', 
      group: 'kyzerpvp',
      memberName: 'announce',
      description: "Announces a message in #announcements"
    });
  }

  async run (message, args)
  {
    let announcementargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
    let announcementmessage = announcementargs.join(" ").slice(9);

    let announcementschannel = message.guild.channels.find(`name`, "announcements");
    if(!announcementschannel) return message.channel.send("Couldn't find the announcements channel");
    var supportteamrole = message.guild.roles.find(`name`, "Admin");
    if (!message.member.roles.has(supportteamrole.id)) return message.channel.send("No admin no announcement. Stupid fak")

    if (!announcementmessage) return message.channel.send("Dumb fak. WHERE IS DA MESSAGE LAH R U DUMB?")

    var announcementmessageembed = new Discord.RichEmbed()
    .setTitle("**Lolicop | Announcement**")
    .setColor("#FFDF00")
    .addField("**__Announcement__**", `${announcementmessage}`)
    .setTimestamp()

  }
}

module.exports = announceCommand;
