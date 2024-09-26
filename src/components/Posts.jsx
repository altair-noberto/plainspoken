import { useState } from 'preact/hooks';
import './Styles/PostList.css'
export default function Posts({posts}) {

  const [language, setLanguage] = useState('')
  const [message, setMessage] = useState('Alterar Linguagem')

  function toDateString(Date){
    const months = ["01", "02", "03", "04", "05", "06", 
    "07", "08", "09", "10", "11", "12"]

    const day = Date.getDate();
    const mouth = months[Date.getMonth()];
    const year = Date.getFullYear();

    return `${day}/${mouth}/${year}`;
  }
  const Posts = posts.filter((post) => post.data.portuguese !== '');
  const notFixedPosts = Posts.filter((post) => post.data.fixed === 'false');
  const fixedPosts = Posts.filter((post) => post.data.fixed === 'true');
  const ptbrPosts = posts.filter((post) => post.data.portuguese === '')
  const notFixedPtPosts = ptbrPosts.filter((post) => post.data.fixed === 'false');
  const fixedPtPosts = ptbrPosts.filter((post) => post.data.fixed === 'true');
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
    <a style={{cursor: 'pointer', maxWidth: 'fit-content'}} onClick={() => {if(language === '') {setLanguage('pt-br'); setMessage('Change language')} else {setLanguage(''); setMessage('Alterar Linguagem')}}}>{message}</a>
    <div class="postList">
      {language !== 'pt-br' ? <div className="fixedPosts">
         <h2>Fixed posts:</h2>
         <div>
            {fixedPosts.map((post) => <div class={"postCard"}
            style={
               {display: 'flex', 
               flexDirection: 'column',
               gap: '10px',
               paddingBottom: '1em',
               paddingLeft: '1em',
               }}>
            <h3><a href={`/blog/posts/${post.slug}`} data-astro-prefetch>{post.data.title}</a></h3>
            <div style={
               {
               display: 'flex',
               flexWrap: 'wrap',
               gap: '8px',
               textAlign: 'left'
               }}>
               <strong>Tags: </strong> {post.data.tags.map((tag) => <a href={"/tags/" + tag} style="text-transform: capitalize;" data-astro-prefetch>{tag}</a>)}</div>
            <p>{post.data.description}</p>
            <p style={{fontFamily: 'initial'}}>{toDateString(post.data.pubDate)}</p>
           </div>)}
           </div>
            <h2>Latest posts: </h2>
      </div> : <div className="fixedPosts">
         <h2>Posts Fixados: </h2>
            {fixedPtPosts.map((post) => <div class={"postCard" + ' ' + post.data.fixed}
            style={
               {display: 'flex', 
               flexDirection: 'column',
               gap: '10px',
               paddingBottom: '1em',
               paddingLeft: '1em',
               }}>
            <h3><a href={`/blog/posts/${post.slug}`} data-astro-prefetch>{post.data.title}</a></h3>
            <div style={
               {
               display: 'flex',
               flexWrap: 'wrap',
               gap: '8px',
               textAlign: 'left'
               }}>
               <strong>Tags: </strong> {post.data.tags.map((tag) => <a href={"/tags/" + tag} style="text-transform: capitalize;" data-astro-prefetch>{tag}</a>)}</div>
            <p>{post.data.description}</p>
            <p style={{fontFamily: 'initial'}}>{toDateString(post.data.pubDate)}</p>
           </div>)}
           <h2>Posts mais recentes: </h2>
      </div>}
      
      {language !== 'pt-br' ? notFixedPosts.map((post) =>
      <div class="postCard"
         style={
            {display: 'flex', 
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '1em',
            }}>
         <h3><a href={`/blog/posts/${post.slug}`} data-astro-prefetch>{post.data.title}</a></h3>
         <div style={
            {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            textAlign: 'left',
            }}>
            <strong>Tags: </strong> {post.data.tags.map((tag) => <a href={"/tags/" + tag} style="text-transform: capitalize;" data-astro-prefetch>{tag}</a>)}</div>
         <p>{post.data.description}</p>
         <p style={{fontFamily: 'initial'}}>{toDateString(post.data.pubDate)}</p>
        </div>) : notFixedPtPosts.map((post) => <div class="postCard"
         style={
            {display: 'flex', 
            flexDirection: 'column',
            gap: '10px',
            paddingBottom: '1em'
            }}>
         <h3><a href={`/blog/posts/${post.slug}`} data-astro-prefetch>{post.data.title}</a></h3>
         <div style={
            {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            textAlign: 'left'
            }}>
            <strong>Tags: </strong> {post.data.tags.map((tag) => <a href={"/tags/" + tag} style="text-transform: capitalize;" data-astro-prefetch>{tag}</a>)}</div>
         <p>{post.data.description}</p>
         <p>{toDateString(post.data.pubDate)}</p>
        </div>)}
    </div>
    </div>
    </>
  );
}