import React, {useState} from "react";
import dummyData from "./dummy-data";
import Post from "./Post"
import "./Posts.css"

const Posts = () => {
    const [data] = useState(dummyData);


    return (
        <div className="posts-container-wrapper">
            {data.map((obj) => (
                <Post key={obj.id} propsFromParent={obj} />
            ))}
        </div>
    );
};

export default Posts;
