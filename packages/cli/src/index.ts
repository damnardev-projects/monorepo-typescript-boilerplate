#!/usr/bin/env node

import { logMessage, type Message } from "@monorepo/common";

const msg: Message = { message: "Hello depuis le CLI!" };
logMessage(msg);
