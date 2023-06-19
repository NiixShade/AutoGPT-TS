import {Agent} from './agent/Agent';

export class AutoGPT {
    private agent: Agent

    constructor(ai_name: string, user_communication_channel: CommunicationChannel) {
        this.agent = new Agent(ai_name, user_communication_channel);
    }

    run(): void {
        this.agent.greet().then(message => message);
    }
}

