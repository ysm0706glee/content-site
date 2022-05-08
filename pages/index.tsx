import type { GetServerSideProps } from "next";
import { SWRConfig } from "swr";

import Posts from "../components/Posts";

type Post = {
  id: number;
  src: string;
  text?: string;
};

type HomeProps = {
  posts: Post[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  globalThis.posts = globalThis.posts ?? [];

  return {
    props: {
      posts: globalThis.posts,
    },
  };
};

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <SWRConfig
        value={{
          fallback: {
            "/api/posts": { posts },
          },
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Posts />
      </SWRConfig>
    </>
  );
};

export default Home;
