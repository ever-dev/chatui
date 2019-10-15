export const loginAction = username => ({
  type: "LOGIN",
  username
});

let id = 0;

export const sendAction = msg => {
  return dispatch => {
    dispatch(startSending(id));
    return fetch(`http://www.mocky.io/v2/5cee37a5300000253a6e99af`, {
      method: "POST",
      body: JSON.stringify(msg)
    }).then(() => dispatch(endSending(id, msg)));
  };
};

const startSending = id => ({
  type: "START_SENDING_MESSAGE",
  id
});

const endSending = (id, msg) => ({
  type: "END_SENDING_MESSAGE",
  id,
  msg
});

export const toggleChatWindow = value => ({
  type: "TOGGLE_CHATWINDOW",
  value
});
