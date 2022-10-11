export function getBotToken(): string {
  const args: string[] = process.argv.slice(2);
  if (!args[0]) console.error('Error: You should provide bot token!');

  return args[0];
}