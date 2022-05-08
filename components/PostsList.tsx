import Image from "next/image";

type Post = {
  id: number;
  src: string;
  text?: string;
};

const PostsList = ({ data }: { data: Post[] }) => {
  return (
    <>
      {data.length &&
        data.map((post) => (
          <div key={post.id}>
            <Image src={post.src} width={300} height={300} alt="Post picture" />
            <p>{post.text}</p>
          </div>
        ))}
    </>
  );
};

export default PostsList;
