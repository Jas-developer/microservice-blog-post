import { PostCreate } from "./components/PostCreate";

function App() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="md:text-4xl font-serif font-semibold text-blue-700">
        Create Post
      </h1>
      <PostCreate />
    </div>
  );
}

export default App;
