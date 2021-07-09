# discord-memoji [![](https://img.shields.io/badge/Made%20with-%F0%9F%92%96-red)](https://www.npmjs.com/package/discord-memoji)
> **A npm package to manage easily server's emojis.**
# Usage 
#### Initialization
You have to install [discord.js](https://npmjs.com/package/discord.js) version including v12.
*This structure is necessary in order for the package to work.*
```js
const { 
    Client,
    Structures
} = require('discord.js')
require('discord-memoji')(Structures);
const client = new Client();
```
#### Show Emoji's URL with Message Listener
> The structure of our functions is made with "**Guild**" class so be sure to use it. Then, our functions will just do the job for you !
```js
client.on('message', message => {
    if (message.content.startsWith("!emojishow")) {
        let emoji = message.content.split(" ").slice(1)
        message.reply(message.guild.emojiShow(emoji))
    }
})
``` 
#### Add Emoji with Message Listener
> Parameter `image` only works with image links and not files at the moment.
```js
client.on('message', message => {
if (message.content.startsWith("!emojiadd")) { 
        let args = message.content.split(" ")
        let name = args[1]
        let image = args[2]
        console.log(image)
        message.guild.emojiAdd(name, image);
    }
})
```
#### All of This (Full Example)
```js
const {
    Client,
    Structures
} = require('discord.js')
require('discord-memoji')(Structures);
const client = new Client();

client.on('message', message => {
    if (message.content.startsWith("!emojishow")) {
        let emoji = message.content.split(" ").slice(1)
        message.reply(message.guild.emojiShow(emoji))
    }
    if (message.content.startsWith("!emojiadd")) {
        let args = message.content.split(" ")
        let name = args[1]
        let image = args[2]
        console.log(image)
        message.guild.emojiAdd(name, image);
    }
})
client.login('YOUR_CLIENT_TOKEN');
```
# Install
`npm install discord-memoji`
# Changelog
> ## **1.0.0**
>    * Adding guild.\<functions\> extension according with [Discord.js](https://www.npmjs.com/package/discord.js).
>    * Adding [colors](https://www.npmjs.com/package/colors) package.
>    * Adding emojiShow function.
>    * Adding emojiAdd function.
# Credits
* Nyrok :
  - [Github](https://github.com/Nyrok) ![GitHub followers](https://img.shields.io/github/followers/Nyrok?style=social)
  - [Twitter](https://twitter.com/@Nyrok10) ![Twitter Follow](https://img.shields.io/twitter/follow/Nyrok10?style=social)
* Plattyz :
  - [Github](https://github.com/Plattyz) ![GitHub followers](https://img.shields.io/github/followers/Plattyz?style=social)
  - [Twitter](https://twitter.com/@0x4d6f6b6d69) ![Twitter Follow](https://img.shields.io/twitter/follow/0x4d6f6b6d69?style=social)
> Don't forget to Star this open-source repo ! ![GitHub Repo stars](https://img.shields.io/github/stars/Plattyz/discord-memoji?style=social)
# License
Apache-2.0
