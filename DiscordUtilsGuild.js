require('colors')
module.exports = function extendDiscordGuild(Guild) {
    class DiscordUtilsGuild extends Guild {
        constructor(client, data) {
            super(client, data);
            /**
             * Show emoji's URL
             * @param {String} emoji - Emoji's Informations like "<:nyrok:862504620122570792>"
             * @returns {String} - Returns Emoji's URL
             */
            this.emojiShow = (emoji) => {
                let emote;
                if (typeof emoji !== "string" && typeof emoji !== "object" || !emoji) {
                    return console.log("[discord-memoji] The provided emoji isn't a valid emoji.".red);
                }
                if (typeof emoji === "object") {
                    emote = emoji[0]
                } else if (typeof emoji === "string") {
                    emote = emoji
                }
                let emoji_id = emote.split(":")[2].replace(">", "");
                if (typeof emoji_id !== "string" || emoji_id.length !== 3 || !emoji_id) return console.log("[discord-memoji] Invalid ID provided.".red);
                else {
                    return "https://cdn.discordapp.com/emojis/" + emoji_id + ".png";
                }

            }
            /**
             * Add an emoji to a Guild
             * @param {String} name - The Name of the Emoji
             * @param {String} image - The Emoji's Image
             * @returns {Boolean} - Response True or False
             */
            this.emojiAdd = (name, image) => {
                return new Promise(async (resolve, reject) => {
                    if (typeof name !== "string" || !name) {
                        return reject(new Error("[discord-memoji] The provided name isn't a valid name.").red);
                    }
                    if (typeof image !== "string" || !image) {
                        return reject(new Error("[discord-memoji] The provided image isn't a valid image.").red);
                    }

                    resolve(this.emojis.create(image, name))
                })
            }
        }
    }
    return DiscordUtilsGuild;
}