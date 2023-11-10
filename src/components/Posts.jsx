import { useState } from 'preact/hooks';
import './Styles/PostList.css'
export default function Posts({posts}) {

  function toDateString(Date){
    const months = ["01", "02", "03", "04", "05", "06", 
    "07", "08", "09", "10", "11", "12"]

    const day = Date.getDate();
    const mouth = months[Date.getMonth()];
    const year = Date.getFullYear();

    return `${day}/${mouth}/${year}`;
  }

  return (
    <>
    <div class="postList">
        {posts.map((post) =>
         <div class="postCard"
         style={
            {display: 'flex', 
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '1em',
            borderTop: '1px solid var(--main)'}}>
         <h3><a href={`/blog/posts/${post.slug}`} data-astro-prefetch>{post.data.title}</a></h3>
         <div style={
            {fontSize: '0.9rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            textAlign: 'left'
            }}>
            <strong>Tags: </strong> {post.data.tags.map((tag) => <a href={"/tags/" + tag} style="text-transform: capitalize;" data-astro-prefetch>{tag}</a>)}</div>
         <p>{post.data.description}</p>
         <p>{toDateString(post.data.pubDate)}</p>
        </div>
        )}
    </div>
    </>
  );
}