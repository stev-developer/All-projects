import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import App from "./App";

// Define your custom theme
const theme = {
  token: {
    colorPrimary: "#1DA57A", // Primary color
    colorLink: "#1DA57A", // Link color
    colorSuccess: "#52c41a", // Success color
    colorError: "#f5222d", // Error color
    colorWarning: "#faad14", // Warning color
    // Add other color tokens as needed
  },
};

ReactDOM.render(
  <ConfigProvider theme={theme}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
