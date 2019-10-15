const initialMessages = [
  {
    type: "text",
    author: "me",
    data: { text: "Why don't they have salsa on the table?" }
  },
  {
    type: "text",
    author: "them",
    data: { text: "What do you need salsa for?" }
  },
  {
    type: "text",
    author: "me",
    data: { text: "Salsa is now the number one condiment in America." }
  },
  {
    type: "text",
    author: "them",
    data: {
      text:
        "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'"
    }
  },
  {
    type: "text",
    author: "me",
    data: {
      text:
        "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'"
    }
  },
  {
    type: "text",
    author: "them",
    data: {
      text:
        "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!"
    }
  },
  {
    type: "text",
    author: "me",
    data: { text: "See, this should be a show. This is the show. " }
  },
  { type: "text", author: "them", data: { text: "What?" } },
  { type: "text", author: "me", data: { text: "This. Just talking." } },
  { type: "text", author: "them", data: { text: "Yeah, right." } },
  {
    type: "text",
    author: "me",
    data: { text: "I'm really serious. I think that's a good idea. " }
  },
  {
    type: "text",
    author: "them",
    data: { text: "Just talking? Well what's the show about?" }
  },
  { type: "text", author: "me", data: { text: "It's about nothing." } },
  { type: "text", author: "them", data: { text: "No story?" } },
  { type: "text", author: "me", data: { text: "No forget the story. " } },
  {
    type: "text",
    author: "them",
    data: { text: "You've got to have a story." }
  },
  { type: "emoji", author: "me", data: { e: "😋" } },
  {
    type: "file",
    author: "me",
    data: {
      url: ".",
      fileName: "bigBlue.png"
    }
  }
];

export const reducer = (
  state = { isLoggedIn: false, messages: initialMessages },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.username,
        isLoggedIn: Boolean(action.username)
      };
    case "START_SENDING_MESSAGE": {
      const new_messages = [...state.messages];
      new_messages.push({
        id: action.id,
        type: "text",
        author: "me",
        data: { text: "Sending... " }
      });
      return { ...state, messages: new_messages };
    }
    case "END_SENDING_MESSAGE": {
      const new_messages = [...state.messages];
      const index = new_messages.findIndex(message => message.id === action.id);
      new_messages[index] = action.msg;
      return { ...state, messages: new_messages };
    }
    case "TOGGLE_CHATWINDOW":
      return { ...state, showChatWindow: action.value };
    default:
      return state;
  }
};
