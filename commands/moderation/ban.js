const { MessageEmbed } = require('discord.js')

module.exports = {
    requiredPermissions: ['BAN_MEMBERS', 'KICK_MEMBERS'],
    category: 'Moderation',  
    description: 'to ban a person not following the rules',
    callback: ({ message, arguments, text }) => {

        const { member, mentions } = message
        const target = mentions.users.first()
        if(target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()

            //Embed for ban issued
            let yEmbed = new MessageEmbed()
            .setTitle('BANNED')
            .setDescription(`<@${targetMember.id}> has been banned`)
            .setFooter(`ban isseued by ${message.author.tag}`)

            message.reply(yEmbed)
        } else {

            let nEmbed = new MessageEmbed()
            .setTitle('ERROR')
            .setDescription('Please state someone to ban')
            .setFooter(`Ban message issued by ${message.author.tag}`)

            message.channel.send(nEmbed)
        }
    }
}