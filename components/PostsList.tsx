import Image from "next/image";
import { motion } from "framer-motion";
console.log(motion);

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
          <motion.div
            key={post.id}
            animate={{ x: 100 }}
            transition={{ delay: 1 }}
          >
            <Image src={post.src} width={300} height={300} alt="Post picture" />
            <p>{post.text}</p>
          </motion.div>
        ))}
    </>
  );
};

export default PostsList;
