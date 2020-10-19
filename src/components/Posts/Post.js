import React, {useState} from 'react';
// import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';


const Post = (props) => {
  // 🔥 Make sure the parent of Post is passing the right props!
  
const [likes, setLikes] = useState(props.propsFromParent.likes);
  
let likePost = () => {
  setLikes(likes +1);
};

  return (
    <div className='post-border'>
      <PostHeader
        username={props.propsFromParent.username}
        thumbnailUrl={props.propsFromParent.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img src={props.propsFromParent.imageUrl}
          alt='post thumbnail'
          className='post-image'
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection like={likes} likePost={likePost}/>
      {/* Comments also wants its props! */}
      {/* <Comment /> */}
    </div>
  );
};

export default Post;
