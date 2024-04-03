module.exports = {
  Admins: ["534635216640147477"], //DEV'S
  ExpressServer: true, 
  DefaultPrefix: process.env.Prefix || "#",
  Port: 8080, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/madesports", // Support Server Link
  Token: process.env.Token, // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1106915765686374411", 
  ClientSecret: process.env.Discord_ClientSecret || "ByTUGtf0StfqQ_ROvUTORllUT7jYSAe-", 
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true, 
  DefaultVolume: 100,
  CallbackURL: "/api/callback", 
  "24/7": true,
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://probot.media/U0nnnhxkYT.png",
  EmbedColor: "#ff7700", 
  Permissions: 2205281600, 
  Website: process.env.Website || "https://music-bot-2.midowael1.repl.co",

  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "MAD E-Sports", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  Lavalink: {
    id: "Main",
    host: "lava-v3.ajieblogs.eu.org", 
    port: 80, 
    pass: "https://dsc.gg/ajidevserver",     
    secure: false, 
    retryAmount: 200, 
    retryDelay: 40, 
  },
  
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", 
    ClientSecret: process.env.Spotify_ClientSecret || "", 
  },


 

};
