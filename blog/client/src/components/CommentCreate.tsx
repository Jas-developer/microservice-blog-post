import { FormEvent, useState } from "react";
import axios from "axios";
export const CommentCreate = ({ postId }: any) => {
  const [comment, setComment] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      { content: comment }
    );
    if (response.status === 201) {
      setComment("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label>New Comment</label>
          <input
            className="border py-2"
            type="text"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-700 px-2 py-1 rounded-sm font-semibold uppercase text-gray-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
