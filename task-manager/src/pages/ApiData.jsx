import React, { useState, useEffect } from "react";

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Fetched Posts</h2>

      <input
        type="text"
        placeholder="Search posts..."
        className="w-full mb-4 px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="space-y-3">
        {filtered.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-3 border rounded dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;
