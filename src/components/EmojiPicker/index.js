import React, { useState } from "react";
import EmojiConvertor from "emoji-js";
import { TextField } from "@material-ui/core";

import emojiData from "./emojiData";
import "./index.scss";

const emojiConvertor = new EmojiConvertor();
emojiConvertor.init_env();

export const EmojiPicker = ({ onEmojiPicked }) => {
  const [filter, setFilter] = useState("");
  return (
    <div className="popup-window">
      <div className="container">
        <TextField
          onChange={e => setFilter(e.target.value)}
          placeholder="Search emoji..."
          fullWidth
        />
        <div className="emoji-picker">
          {emojiData.map(category => {
            const filteredEmojis = category.emojis.filter(({ name }) =>
              name.includes(filter)
            );
            return (
              <div className="category" key={category.name}>
                {filteredEmojis.length > 0 && (
                  <div className="title">{category.name}</div>
                )}
                {filteredEmojis.map(({ char }) => {
                  return (
                    <span
                      key={char}
                      className="emoji"
                      onClick={() => onEmojiPicked(char)}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
