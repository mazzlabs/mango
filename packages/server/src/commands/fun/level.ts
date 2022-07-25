import Discord from "discord.js";

import type { PrismaClient } from "@prisma/client";

// Fun command

/**
 * Shows XP/Level of the user.
 * @param {Discord.Client} Client the client
 * @param {Discord.CommandInteraction & Discord.Message} Interaction the slash command that contains the interaction name
 * @param {string[]} args the command args
 * @param {any} options some options
 */
module.exports = {
	name: "level",
	description: "Replies with your Mango level and XP",
	category: "fun",

	async execute(Client: Discord.Client, interaction: Discord.CommandInteraction & Discord.Message, _args: string[], prisma: PrismaClient) {
		const fetchUser = await prisma.ranks.findFirst({ where: { idOfUser: interaction.member.user.id, idOfGuild: interaction.guild.id } });
		const userXp = fetchUser.xp;

		const levelEmbedinteraction = new Discord.MessageEmbed()
			.setTitle(`${interaction.member.user.tag} level`)
			.setAuthor(interaction.member.user.username, interaction.member.user.avatarURL())
			.setDescription(`Your level - :gem: XP: **${fetchUser.xp}** | :large_orange_diamond: Level: *${Math.floor(userXp / 50)}*`)
			.setColor("#019FE9")
			.setFooter(Client.user.username, Client.user.avatarURL())
			.setTimestamp();

		interaction.editReply({ embeds: [levelEmbedinteraction] });
	},
};