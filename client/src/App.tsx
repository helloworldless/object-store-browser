import React from "react";

const App: React.FC = () => {
  const [state, setState] = React.useState("");
  React.useEffect(() => {
    (async () => {
      const response = await fetch("/world");
      console.log(response.status, response.statusText);
      const text = await response.text();
      setState(text);
    })();
  }, []);
  return <div>Hello {state}</div>;
};

export default App;
