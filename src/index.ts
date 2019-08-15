﻿import * as Discord from "discord.js";

import * as Binder from "./utils/EventsBinder";

import { Token } from "./token";

const Client: Discord.Client = new Discord.Client();

(async () => {
	await Binder.bind(Client);
	Client.login(Token);
})();
