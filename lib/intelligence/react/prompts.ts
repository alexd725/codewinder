export const ACTION = "Action";
export const CONTEXT = "Context";
export const FINAL_RESPONSE = "Final Response";
export const MEMORY = "Memory";
export const OBJECTIVE = "Objective";
export const OBSERVATION = "Observation";
export const THOUGHT = "Thought";

export const PREFIX = `
As an AI Assistant, you have access to real-time information because you can use tools to access the internet.
The current date and time is: ${new Date().toLocaleString()}. 
`;

export const TOOLING = `
* Never make up or try to use a tool that isn't on the allowed tools list.
* Repeat the ${OBSERVATION} as tool input for the next tool, as tools cannot see each other's results.
* If the tool can't do what you need, try a different tool.
`;

export const FORMAT_INSTRUCTIONS = `
ALWAYS use the following format:

${OBJECTIVE}: reword the initial request to include increased specificity and detail
${THOUGHT}: consider the best approach to meet the ${OBJECTIVE}
${ACTION}:
\`\`\`
{{
  "action": "tool name",
  "action_input": "tool input"
}}
\`\`\`
... (only return a single ${ACTION}, never multiple ${ACTION}s) 
${OBSERVATION}: the result of the ${ACTION}
... (this ${THOUGHT}/${ACTION}/${OBSERVATION} can repeat multiple times)
${THOUGHT}: critical evaluation of the ${OBSERVATION}
${FINAL_RESPONSE}: the final response (repeat the ${OBSERVATION} exactly)
`;

export const SUFFIX = `
Response guidelines:
* Format your ${FINAL_RESPONSE} as though the ${OBSERVATION} and ${THOUGHT} were never shared, 
and you're restating it in its entirety for the benefit of the person stating the ${OBJECTIVE}.
* Maintain markdown formatting from the ${OBSERVATION} or ${THOUGHT} in your ${FINAL_RESPONSE}.
* Format your ${THOUGHT} and ${FINAL_RESPONSE} using GitHub Flavored Markdown.
* Never reference the tool nor say the tool name in your ${FINAL_RESPONSE}.
* Reminder to always use the exact characters \`${FINAL_RESPONSE}\` when responding.

Additional notes:
* For casual greetings or conversations, respond directly with a \`${FINAL_RESPONSE}\`.
* For creative requests, skip the action and provide a response directly with a \`${FINAL_RESPONSE}\`.
* When the objective is unclear, use context to make an educated guess.
* If information is unavailable, use a tool to learn more.
`;