export function buildPrompt(query, documents, history = []) {

const previous = history
.map(chat=>`${chat.role}: ${chat.message}`)
.join("\n");

const context = documents
.map(doc=>`Title:${doc.title}

${doc.content}`)
.join("\n-----------------\n");

return `
You are an Enterprise AI Assistant.

Rules:

1. Use documents first.
2. If answer not found use your knowledge.
3. Answer professionally.
4. Use markdown.
5. If using general knowledge mention it.

Conversation

${previous}

Documents

${context}

Question

${query}
`;

}