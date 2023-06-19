/**
 * Please note that these methods are blocking (they halt execution of the script until the user responds),
 * and they're generally not recommended for modern web development because they're disruptive to the user's experience.
 * It would be better to use an asynchronous, non-blocking method of taking user input, such as a form or an input field.
 */
export class BrowserWindowInteraction implements CommunicationChannel {
    readInput(prompt: string): Promise<string> {
        let user_input = window.prompt(prompt); // can be null if user cancels input.
        return Promise.resolve(user_input || '');
    }

    writeOutput(message: string): void {
        window.alert(message);
    }
}