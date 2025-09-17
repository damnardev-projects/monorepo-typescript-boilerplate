export interface Message {
  message: string;
}

export function logMessage(msg: Message) {
  const now = new Date().toLocaleTimeString();
  console.log(`[${now}] ${msg.message}`);
}
