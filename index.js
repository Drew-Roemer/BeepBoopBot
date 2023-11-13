require('dotenv').config();

const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const eventHandler = require('./src/handlers/eventHandler');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

eventHandler(client);

client.login(process.env.DISCORD_BOT_ID);
