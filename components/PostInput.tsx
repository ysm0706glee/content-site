import React, { useState } from "react";

const PostList = ({ createPost, mutate }: any) => {
  const [src, setSrc] = useState("");
  const [text, setText] = useState("");

  const handlePost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost(src, text, mutate);
    setSrc("");
    setText("");
  };

  const handleChangeSrc = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSrc(e.target.value);
  };

  const handleChangeText = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setText(e.target.value);
  };

  return (
    <>
      <form onSubmit={handlePost}>
        <input type="text" value={src} onChange={handleChangeSrc} />
        <input type="text" value={text} onChange={handleChangeText} />
        <button>Post</button>
      </form>
    </>
  );
};

export default PostList;
