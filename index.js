import { REST, Routes } from 'discord.js';
import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers] });
const TOKEN = "MTMwMjUzOTY1MTYwNDY3NjYyOA.Gg5D-F.26O1BIjjpzX7a5Zq00tjh20cEYoPB7kcTYIGzA";
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
  if(message.content.includes("mom") || message.content.includes("realize") || message.content.includes("mile")) {
      message.channel.send("bozo");
  }
});
  
 client.login(TOKEN);