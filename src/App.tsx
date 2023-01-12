import React from "react";
import "./App.css";
import Terminal from "./components/Terminal";

const getYear = () => {
  return new Date().getFullYear();
};

const welcomeMessage = `Welcome to my site fellow humans and bots.

Type 'help' to view a list of available commands.
`;

 const bannerCondensed =
  "    ____  _____________ __  ____  ____ \n" +
  "   / __ \/ ___/_  __/ // / / __ \/ __ \\n" +
  "  / /_/ /\__ \ / / / // /_/ /_/ / __  /\n" +
  " / ____/___/ // / /__  __/ _, _/ /_/ / \n" +
  "/_/    /____//_/    /_/ /_/ |_|\____/  \n" +
  "  \u00A9 " +
  getYear();

const prompt = "root@pst4r8:~#";

function App() {
  return (
    <Terminal
      welcomeMessage={welcomeMessage}
      banner={bannerCondensed}
      terminalPrompt={prompt}
    />
  );
}

export default App;
