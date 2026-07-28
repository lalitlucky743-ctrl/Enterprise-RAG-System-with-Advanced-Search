const conversations = new Map();

export function saveMessage(userId, role, message) {
  if (!conversations.has(userId)) {
    conversations.set(userId, []);
  }

  const history = conversations.get(userId);

  history.push({
    role,
    message
  });

  if (history.length > 10) {
    history.shift();
  }
}

export function getHistory(userId) {
  return conversations.get(userId) || [];
}