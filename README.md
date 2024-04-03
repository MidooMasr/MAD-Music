# Discord Music Bot

This is a Discord music bot that allows users to play music in a voice channel using commands.

[![Demo Video](https://cdn.discordapp.com/attachments/1097783484614987817/1101452133099900948/Thumnail.png)](addingsooner)

## Features

- Play music from YouTube, Spotify, ALL Sources 
- Pause and resume playback
- Skip to the next song in the queue
- Show the current song and queue
- Leave the voice channel

## Usage

To use the bot, invite it to your server and join a voice channel. Then, use the following commands in a text channel:

- `/play <song name>`: Plays the specified song from YouTube
- `/pause`: Pauses the playback
- `/resume`: Resumes the playback
- `/skip`: Skips to the next song in the queue
- `/queue`: Shows the current queue
- `/nowplaying`: Shows the current song
- `/leave`: Leaves the voice channel
- ETC

## Installation and Setup

To use this bot on your own server, you will need to follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/ScienceGear/music-bot.git`.
2. Install the required dependencies by running `npm install` in the root directory.
3. Create a new application and bot account in the [Discord Developer Portal](https://discord.com/developers/applications).
4. Copy the `TOKEN` for your bot and save it to `botconfig.js`
5. Invite the bot to your server using the following link: `https://discord.com/oauth2/authorize?client_id=YOUR_BOT_CLIENT_ID&scope=bot&permissions=2205281600` where `YOUR_BOT_CLIENT_ID` is the client ID of your bot, which can be found in the Developer Portal.
6. Start the bot by running `node index.js` in the root directory of this project.

## Contributing

Contributions are always welcome! If you find a bug or want to add a new feature, please create an issue or submit a pull request.
Base On https://github.com/SudhanPlayz/Discord-MusicBot

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
