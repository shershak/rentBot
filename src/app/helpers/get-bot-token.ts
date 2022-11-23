import { error } from "./logger.service";

export function getBotToken(): string {
  const args: string[] = process.argv.slice(2);
  if (!args[0]) error('You should provide bot token!');

  return args[0];
}