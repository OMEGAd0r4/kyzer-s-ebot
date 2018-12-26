const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});

class pmcloseCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'pmclose', 
        group: 'kyzerpvp',
        memberName: 'pmclose',
        description: "Close the dm channel with kyzah"
      });
    }

    async run(message, args)
    {
      if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a pm channel.`);
    message.channel.send(`Are you sure you want to close the pm channel? Once confirmed, you cannot reverse this action!\nTo confirm, type \`>confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '>confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit("Time's up, your request has been canceled").then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
    }
}

module.exports = pmcloseCommand;
