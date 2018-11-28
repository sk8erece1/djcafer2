const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**WOODIE**")
        .setImage("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setThumbnail("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setColor(0x00AE86)
        .addField("Lakabı", "The Lumberjack (Oduncu)", true)
        .addField("Yetenekleri", `
        *Çok Güzel Bir Baltası Var
   *Korkunç Bir Sırrı Var (Werebeaver)
   `, true)
   .addField("Motto", `That's Nice Rree, Eh? (Güzel Ağaç, Ha?)`, true)
   .addField("Selam", "Haha Naber")


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'woodie',
  description: 'Woodie The Lumberjack Hakkında Bilgi Verir',
  usage: 'woodie'
};
