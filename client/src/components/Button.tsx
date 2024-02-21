import React from "react";

export default function Button() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  async function handleSubmit() {
    try {
      setIsLoading(true);

      const response = await fetch("/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <button onClick={handleSubmit}>Click Here</button>
    </div>
  );
}
