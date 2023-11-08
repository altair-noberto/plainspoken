import { useState } from 'preact/hooks';
import './Styles/PostList.css'
export default function Posts({posts}) {

  const [sort, setSort] = useState('a');
  const [Posts, setPosts] = useState(posts);

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
    <p style="text-align: right; grid-column: 1 / 3;">
    <select onChange={(e) => {setSort(e.target.value); sort === 'a' ? setPosts(posts.sort((a, b) => {return new Date(a.data.pubDate) - new Date(b.data.pubDate)}))
  : setPosts(posts.sort((a, b) => {return new Date(b.data.pubDate) - new Date(a.data.pubDate)}))}}>
        <option selected value="a">Sort by: Most recent</option>
        <option value="b">Sort by: Older</option>
    </select>
    </p>
    <div class="postList">
        {Posts.map((post) =>
         <div class="postCard"
         style={
            {display: 'flex', 
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '1em',
            borderTop: '1px solid var(--main)'}}>
         <h3><a href={`/blog/posts/${post.slug}`}>{post.data.title}</a></h3>
         <div style={
            {fontSize: '0.9rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            textAlign: 'left'
            }}>
            <strong>Tags: </strong> {post.data.tags.map((tag) => <a href={"/tags/" + tag} style="text-transform: capitalize;">{tag}</a>)}</div>
         <p>{post.data.description}</p>
         <p>{toDateString(post.data.pubDate)}</p>
        </div>
        )}
    </div>
    </>
  );
}