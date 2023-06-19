import {AutoGPT} from './autogpt/AutoGPT'
import {NodeConsole} from "./node_env/NodeConsole";

let auto_gpt: AutoGPT = new AutoGPT("AI 0.1", new NodeConsole());
auto_gpt.run();