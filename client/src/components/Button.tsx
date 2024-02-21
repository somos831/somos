import React from "react";

export default function Button() {
  const [message, setMessage] = React.useState(null);
  const url = "http://localhost:1234/api";

  async function handleSubmit() {
    try {
      //Fetch data from api
      const response = await fetch(url);

      //Get the json reponse from the response
      const jsonData = await response.json();

      //Assign the json message field to message variable
      setMessage(jsonData.message);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <button onClick={handleSubmit}>Click Here</button>
      {message ? (
        <div>
          <p>This is the fetched data</p>
          <p>{message}</p>
        </div>
      ) : (
        <p>Press this button to fetch from our server</p>
      )}
    </div>
  );
}
