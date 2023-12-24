import { FormEvent, useState } from "react";
import axios from "axios";
export const PostCreate = () => {
  const [post, setPost] = useState<string>("");

  //   handle change
  const handleChange = (e: React.SetStateAction<string>) => {
    setPost(e);
  };
  //submiting the data
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/posts", {
        title: post,
      });
      if (response.status === 201) {
        setPost("");
        console.log(response.data);
      } else {
        throw new Error("Error sending data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //   sending data

  return (
    <div className=" w-[80vw] md:w-[70vw]">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Title</label>
          <input
            value={post}
            className="border h-8 rounded-sm outline-none text-center "
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-gray-100 h-8 rounded-sm"
        >
          Submit {post}
        </button>
      </form>
    </div>
  );
};
