import * as Discord from "discord.js";

export async function run(client: Discord.Client, message: Discord.Message, args: string[]) {
	const ping = await message.channel.send("Ping?") as Discord.Message;

	const pong = new Discord.RichEmbed()
		.setTitle(`Latency information for ${message.author.tag}`)
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor(Math.floor(Math.random() * 16777214) + 1)
		.setDescription("Latency information")
		.addField("Host latency", `**${message.createdTimestamp - message.createdTimestamp}** ms.`, true)
		.addField("API latency", `**${Math.round(client.ping)}** ms.`, true)
		.setFooter(client.user.username, client.user.avatarURL)
		.setTimestamp();

	ping.edit(pong);
}
