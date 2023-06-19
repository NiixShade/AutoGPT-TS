import * as readline from 'readline';

export class NodeConsole implements CommunicationChannel {
    private reader: readline.Interface;

    constructor() {
        this.reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    readInput(prompt: string): Promise<string> {
        return new Promise(resolve => {
            this.reader.question(prompt, answer => {
                resolve(answer);
                this.reader.close();
            });
        });
    }

    writeOutput(message: string): void {
        console.log(message);
    }
}