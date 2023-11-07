import { useState } from 'preact/hooks';
import './Styles/PostList.css'
export default function Posts({posts}) {

  const [sort, setSort] = useState('a');

  return (
    <>
    <p style="text-align: right;">
    <select onChange={(e) => setSort(e.value)}>
        <option selected value="a">Sort by: Most recent</option>
        <option value="b">Sort by: Older</option>
    </select>
    </p>
    <div class="postList">
        {posts.map((post) =>
         <div class="postCard"
         style={
            {display: 'flex', 
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '1em',
            borderTop: '1px solid var(--main)'}}>
         <h3><a href={post.url}>{post.frontmatter.title}</a></h3>
         <div style={
            {fontSize: '0.9rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            textAlign: 'left'
            }}><strong>Tags: </strong> {post.frontmatter.tags.map((tag) => <a href={"/tags/" + tag} style="text-transform: capitalize;">{tag}</a>)}</div>
         <p>{post.frontmatter.description}</p>
         <p>{post.frontmatter.pubDate.slice(8,10) + '/' + post.frontmatter.pubDate.slice(5,7) + '/' + post.frontmatter.pubDate.slice(0,4)}</p>
        </div>
        )}
    </div>
    </>
  );
}