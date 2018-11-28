const Discord = require("discord.js");
const moment = require('moment');

module.exports.run = async (bot, message, args) => {
  const ok = message.client.emojis.get("441922608720510987");
           var embed = new Discord.RichEmbed()
                .setAuthor('#' + message.channel.name, message.guild.iconURL)
                .addField(" ID", message.channel.id)
                if (message.channel.nsfw) {
                    embed.addField(" Uygunsuz İçerik", "Evet", true)
                }
                else {
                    embed.addField(" Uygunsuz İçerik", "Hayır", true)
                }
                embed.addField('Oluşturulduğu Tarih:', moment(message.channel.createdAt).format('DD/MM/YYYY'), true)
                .setColor(3447003)
                .setThumbnail(message.guild.iconURL)
                .setFooter('Cafer', bot.user.avatarURL)
            message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kanalbilgisi',
  description: 'Kanal Bilgisini Gösterir.',
  usage: 'kanalbilgisi'
};
