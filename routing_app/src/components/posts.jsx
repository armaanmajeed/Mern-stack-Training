import React from 'react';

const Posts = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Posts</h1>
            <h2>Year: {props.match.params.year}, Month: {props.match.params.month}</h2>
        </div>
    );
}
 
export default Posts;