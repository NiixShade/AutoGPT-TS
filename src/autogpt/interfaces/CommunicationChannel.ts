/**
 * Define an interface to take [user] input and return [the AI] response.
 *
 * Use:
 * (async () => {
 *     let channel = new CommunicationChannel();
 *     let name = await channel.readInput("What is your name? ");
 *     channel.showOutput(`Hello, ${name}!`);
 * })();
 */
interface CommunicationChannel {
    readInput(prompt: string): Promise<string>;

    writeOutput(message: string): void;
}