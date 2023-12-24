import { PostCreate } from "./components/PostCreate";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div className="flex justify-center flex-col gap-6 items-center">
      <h1 className="md:text-4xl font-serif font-semibold text-blue-700">
        Create Post
      </h1>
      <PostCreate />
      <hr />
      <h1 className="text-gray-700 font-semibold text-2xl">POSTS</h1>
      <PostList />
    </div>
  );
}

export default App;
