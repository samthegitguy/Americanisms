import { EmbedBuilder } from 'discord.js'

// inside a command, event listener, etc.
export function Embed(Americanism, Britishism) {
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle('Americanism detected!')
        .setURL('https://reddit.com/r/quippus')
        .setAuthor({ name: 'Caek Ciing Dispenser', iconURL: 'https://media.istockphoto.com/id/185295927/photo/happy-man-gives-thumbs-up.jpg?s=612x612&w=0&k=20&c=YI_59QJWP-8Of_wQ-4o56PbidPH7ypgTQ5eVbP0nmvU=', url: 'https://reddit.com/r/quippus' })
        .setDescription('Americanism Detected!\nYour post contains one or more Americanisms. Things to fix: ')
        .setThumbnail('https://media.istockphoto.com/id/185295927/photo/happy-man-gives-thumbs-up.jpg?s=612x612&w=0&k=20&c=YI_59QJWP-8Of_wQ-4o56PbidPH7ypgTQ5eVbP0nmvU=')
        .addFields(
            { name: Americanism, value: 'Should be ' + Britishism },
            { name: '\u200B', value: '\u200B' },
        )
        .setImage('https://media.istockphoto.com/id/185295927/photo/happy-man-gives-thumbs-up.jpg?s=612x612&w=0&k=20&c=YI_59QJWP-8Of_wQ-4o56PbidPH7ypgTQ5eVbP0nmvU=')
        .setTimestamp()
        .setFooter({ text: 'you fucking dumbass', iconURL: 'https://media.istockphoto.com/id/185295927/photo/happy-man-gives-thumbs-up.jpg?s=612x612&w=0&k=20&c=YI_59QJWP-8Of_wQ-4o56PbidPH7ypgTQ5eVbP0nmvU=' });
}

// Sample usage: channel.send({ embeds: [exampleEmbed] });