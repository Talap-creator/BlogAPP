import { useState, useEffect } from 'react';

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://king-prawn-app-llcn9.ondigitalocean.app/blog')
      .then(response => response.json())
      .then(data => {
        setBlogs(data.blogs);
        if (data.blogs.length > 0) {
          const sortedBlogs = data.blogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          setLatestBlog(sortedBlogs[0]);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { blogs, latestBlog, loading, error };
};
