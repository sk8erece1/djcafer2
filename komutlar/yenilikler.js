const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  const pingozel = new Discord.RichEmbed()
    .setTitle("YENİLİKLER")
  .setAuthor("Cafer | Yenilikler", bot.user.avatarURL)
  .setColor("RANDOM")
  .setDescription("Yeni Komutlar:/çayiç , /yenilikler , /yumruk , /oylama")
  .setFooter('Cafer', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .addBlankField(true)
      return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'yenilikler',
  description: 'Yenilikleri Gösterir.',
  usage: 'yenilikler'
};
