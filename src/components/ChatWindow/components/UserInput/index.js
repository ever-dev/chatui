import React, { useState } from "react";
import { EmojiPicker } from "../../../EmojiPicker";
import { IconButton, TextField, Toolbar } from "@material-ui/core";
import { InsertEmoticon, Send } from "@material-ui/icons";

import "./index.scss";

export const UserInput = ({ sendAction }) => {
  const [showEmojiPicker, toggleEmojiPicker] = useState(false);
  const [text, setText] = useState("");
  return (
    <div>
      <Toolbar className="user-input">
        <TextField
          margin="normal"
          required
          fullWidth
          autoFocus
          multiline
          rowsMax="10"
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <div className="emoji-container">
          <IconButton onClick={() => toggleEmojiPicker(!showEmojiPicker)}>
            <InsertEmoticon />
          </IconButton>
          {showEmojiPicker && (
            <EmojiPicker
              onEmojiPicked={e => {
                if (text) {
                  setText(text + e);
                } else {
                  sendAction({
                    author: "me",
                    type: "emoji",
                    data: { e }
                  });
                }
                toggleEmojiPicker(false);
              }}
            />
          )}
        </div>
        <IconButton
          onClick={() => {
            sendAction({
              author: "me",
              type: "text",
              data: { text }
            });
          }}
        >
          <Send />
        </IconButton>
      </Toolbar>
    </div>
  );
};
