import React from "react";
import CloudDownload from "@material-ui/icons/CloudDownload";
import "./index.scss";

export const FileMessage = ({ data }) => {
  return (
    <a className="message-file" href={data.url} download={data.fileName}>
      <CloudDownload />
      <p>{data.fileName}</p>
    </a>
  );
};
