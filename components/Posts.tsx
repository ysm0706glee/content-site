import React from "react";
import useSWR from "swr";
import axios from "axios";

import PostInput from "./PostInput";
import PostsList from "./PostsList";

type Post = {
  id: number;
  src: string;
  text?: string;
};

async function createPost(src: string, text: string, mutate: () => void) {
  try {
    await axios.post("/api/posts", { src, text });

    mutate();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
    } else {
      console.log("unexpected error: ", error);
    }
  }
}

const Posts = () => {
  const { data, mutate } = useSWR<{ posts: Post[] }>("/api/posts");

  return (
    <>
      <PostInput createPost={createPost} mutate={mutate} />
      <PostsList data={data!.posts} />
    </>
  );
};

export default Posts;
