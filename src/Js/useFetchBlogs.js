import { useState, useEffect } from 'react';

const apiUrl = 'https://ofy-back-3inrc.ondigitalocean.app/blog';

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
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

  return { blogs, latestBlog, loading, apiUrl, error };
};
