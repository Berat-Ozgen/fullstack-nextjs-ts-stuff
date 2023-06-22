"use client";

import React, { useState } from "react";

const FormPost = () => {
  const [title, setTitle] = useState("");
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    const res = await data.json();
    if (!res.ok) console.log(res);
  }
  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="text-red-600"
      />
      <button type="submit">yeni post</button>
    </form>
  );
};

export default FormPost;
