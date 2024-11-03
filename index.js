import { REST, Routes } from 'discord.js';
import { Client, GatewayIntentBits } from 'discord.js';

import 'dotenv/config';

import { Embed } from './embeds.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
const TOKEN = process.env.TOKEN;
const CLIENT_ID = "1302539651604676628";

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

//////////////////

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
client.on('messageCreate', message => {
    
    if (!message.author.bot) {
        let Americanism;
        let Britishism;

        let send = true;

        if (message.content.includes("mile")) {
            Americanism = "mile";
            Britishism = "1.6 kilometers";
        } else if (message.content.includes("mom")) {
            Americanism = "mom";
            Britishism = "mum";
        } else {
            send = false;
        }

        if (send) {
            message.channel.send({ embeds: [Embed(Americanism, Britishism)] });
            /*(
                "Americanism Detected\nYour post contains one or more Americanisms. Things to fix: " + 
                message.content +
                "\n\nReplace with " +
                reply +
                "\n\nYes, I am a bot and in an experimental alpha state. If you think I missed an Americanism, let the developer of AmericanismBot know by replying to the bot's comment. Version: W-Class Tram v0.2.1a"
            )*/
        }
    }
});
  
 client.login(TOKEN);