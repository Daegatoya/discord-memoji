module.exports = function extendDiscordGuild(Guild) {
    class DiscordUtilsGuild extends Guild {
        constructor(client, data) {
            super(client, data);
            /**
             * Add an emoji to a Guild
             * @param {String} name - The Name of the Emoji
             * @param {String} image - The Emoji's Image
             * @returns {Boolean} - Response True or False
             */
            this.emojiAdd = (name, image) => {
                return new Promise(async (resolve, reject) => {
                    if (typeof name !== "string" || !name) {
                        return reject(new Error("[discord-memoji] The provided name isn't a valid name."));
                    }
                    if (typeof image !== "string" || !image) {
                        return reject(new Error("[discord-memoji] The provided image isn't a valid image."));
                    }

                    resolve(this.emojis.create(image, name))
                })
            }
        }
    }
    return DiscordUtilsGuild;
}