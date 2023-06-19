/**
 * Agent class for interacting with Auto-GPT.
 * Attributes:
 *     ai_name: The name of the agent.
 *     memory: The memory object to use.
 *     next_action_count: The number of actions to execute.
 *     system_prompt: The system prompt is the initial prompt that defines everything
 * the AI needs to know to achieve its task successfully.
 *     Currently, the dynamic and customizable information in the system prompt are
 * ai_name, description and goals.
 *
 *     triggering_prompt: The last sentence the AI will see before answering.
 *     For Auto-GPT, this prompt is:
 *     Determine which next command to use, and respond using the format specified
 * above:
 *     The triggering prompt is not part of the system prompt because between the
 * system prompt and the triggering
 * prompt we have contextual information that can distract the AI and make it
 * forget that its goal is to find the next task to achieve.
 *     SYSTEM PROMPT
 * CONTEXTUAL INFORMATION (memory, previous conversations, anything relevant)
 * TRIGGERING PROMPT
 *
 * The triggering prompt reminds the AI about its short term meta task
 * (defining the next task)
 */
export class Agent {
    constructor(
        private aiName: string,
        private userCommunicationChannel: CommunicationChannel,
    ) {
    }

    async greet(): Promise<String> {
        let username: string = await this.userCommunicationChannel.readInput("What is your name? ")
        let message = `Hello, ${username}! I'm ${this.aiName}`;
        this.userCommunicationChannel.writeOutput(message)
        return message;
    }
}
