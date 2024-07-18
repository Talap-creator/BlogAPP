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
        const updatedBlogs = data.blogs.map(blog => {
          const updatedContent = blog.content.replace(/<img src="\/media/g, `<img src="${apiUrl}/media`);
          return { ...blog, content: updatedContent };
        });
        setBlogs(updatedBlogs);
        if (updatedBlogs.length > 0) {
          const sortedBlogs = updatedBlogs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
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
