import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");
  function handleSetName(e) {
    setName((name) => e.target.value);
  }
  function handleSetUrl(e) {
    setUrl((url) => e.target.value);
  }
  function handleSubmit(e) {
    if (!name || !url) {
      return;
    }
    e.preventDefault();
    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${url}?=${id}`,
      balance: 0,
      id,
    };

    onAddFriend(newFriend);
    setName("");
    setUrl("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑Friend name</label>
      <input type="text" value={name} onChange={handleSetName} />
      <label>📷 Image URL</label>
      <input type="text" value={url} onChange={handleSetUrl} />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
