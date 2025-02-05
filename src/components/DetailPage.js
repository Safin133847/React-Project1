import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './DetailPage.css'; 
import { fetchPosts } from '../actions/postsActions';  

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { posts } = useSelector(state => state.posts);

  const post = posts.find((post) => post.id === parseInt(id));

  useEffect(() => {
    if (!post) {
      dispatch(fetchPosts());
    }
  }, [dispatch, post]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail">
      <img
        src="https://s3-alpha-sig.figma.com/img/27c6/98a3/b83b29fa3c39067f858914a0eba5207a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Iqs5BxhVuJg~CZdjHBNY32HtYNfh40hkaxgbsw34qC9Mi7sRCZl1tJ31~zIwwKCNDZnpVg1v7t-iQDM8WwrngN~scNwktqbCeKBTAPYGMwFeU1Q3pmS07x6WRS0~3uma7yz8mOzaHlDGoWv5yuo5h2ZYEiWZMRetjU~VDSHu3q6KTWMnviGe8jQpZ~6y3B12~kVEt2flLdr9NV3UUdqtr6cLSHyxPh3WqHd7jjTdPzygs-l8XLib7DvjOo6XUH-HjBz0033qUs5iPQ4QR4X8vuSJSHY4AlggT2J~ql5SWfM5N-eJ4sra0zqG8wtig6YIVttxo6lO7EJy4Btp9-bHCA__"
        alt=""
        className="section-image"  
      />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
};

export default DetailPage;
