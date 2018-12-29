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
      var irls = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrppeXUBjkH_fbnXiebOWoTILjnAMKAtyeZWcVk5koZ0BqHoTy4Q", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3ofTVmaigTObUCQsrU_0LBIirwLt4PRohLfIBz6pWXd88NF_", "https://coubsecure-s.akamaihd.net/get/b89/p/coub/simple/cw_timeline_pic/3b2a65d60ed/f959f765de1ea74816c4e/big_1471876109_1382476678_image.jpg", "http://i.imgur.com/3G7ex.jpg", "https://cdn.discordapp.com/attachments/525200110049689600/526677259231297546/tlzf7otr80911.png", "https://cdn.discordapp.com/attachments/525200110049689600/526677177928777739/Z.png", "https://c8.alamy.com/comp/E0X8AN/close-up-of-little-girl-with-a-lollipop-isolated-on-white-background-E0X8AN.jpg", "https://previews.123rf.com/images/johanjk/johanjk1309/johanjk130900154/22400660-young-sensual-girl-sucking-lollipop-outdoors-lifestyle-.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcKcgEK2Cfo-oGTJuDshdgOk-i-sHD0gmFiUEOgiyY7svuCJe"];

      message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Lolicop's IRL**")
        .setColor("#000000")
        .addField("Kyzer is obviously black", "->")
        .setImage(irls[Math.floor(Math.random() * irls.length)])})
  }
}

module.exports = irlCommand;
