import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'; 
import { fetchPosts } from '../actions/postsActions';  // Adjust the import path if necessary

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="posts-container">
        <h1 className="heading">Social Media App</h1>
        <hr className="divider" /> 

    <div className="posts-list">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <img
            src="https://s3-alpha-sig.figma.com/img/27c6/98a3/b83b29fa3c39067f858914a0eba5207a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iqs5BxhVuJg~CZdjHBNY32HtYNfh40hkaxgbsw34qC9Mi7sRCZl1tJ31~zIwwKCNDZnpVg1v7t-iQDM8WwrngN~scNwktqbCeKBTAPYGMwFeU1Q3pmS07x6WRS0~3uma7yz8mOzaHlDGoWv5yuo5h2ZYEiWZMRetjU~VDSHu3q6KTWMnviGe8jQpZ~6y3B12~kVEt2flLdr9NV3UUdqtr6cLSHyxPh3WqHd7jjTdPzygs-l8XLib7DvjOo6XUH-HjBz0033qUs5iPQ4QR4X8vuSJSHY4AlggT2J~ql5SWfM5N-eJ4sra0zqG8wtig6YIVttxo6lO7EJy4Btp9-bHCA__"
            alt=""
            className="section-image"  
          />
          <h2>{post.title.length > 30 ? post.title.slice(0, 30) + '...' : post.title}</h2>
          <p>{post.body.length > 100 ? post.body.slice(0, 100) + '... Read More' : post.body}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default HomePage;
