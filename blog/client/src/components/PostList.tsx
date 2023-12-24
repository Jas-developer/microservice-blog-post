import { useEffect, useState } from "react";
import axios from "axios";
import { CommentCreate } from "./CommentCreate";

export const PostList = () => {
  const [posts, setPosts] = useState<Object>({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div key={post.id} className=" border py-2 px-2">
        <span>{post.title}</span>
        <CommentCreate postId={post.id} />
      </div>
    );
  });
  return (
    <div className="grid md:w-[70vw] w-[80vw] lg:grid-cols-2 gap-2">
      {renderedPosts}
    </div>
  );
};
