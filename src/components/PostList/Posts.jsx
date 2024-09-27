import { useState } from 'preact/hooks';
import PostCard from './PostCard.jsx';

import './PostList.css'
export default function Posts({posts}) {

  const [language, setLanguage] = useState('')
  const [message, setMessage] = useState('Alterar Linguagem')

  const Posts = posts.filter((post) => post.data.portuguese !== '');
  const ptbrPosts = posts.filter((post) => post.data.portuguese === '')

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
    <a style={{cursor: 'pointer', maxWidth: 'fit-content'}} onClick={() => {if(language === '') {setLanguage('pt-br'); setMessage('Change language')} else {setLanguage(''); setMessage('Alterar Linguagem')}}}>{message}</a>
    {language !== 'pt-br' ? 
      <h2>Latest posts: </h2> : <h2>Posts mais recentes: </h2>
    }
    <div class="postList">
      {language !== 'pt-br' ? Posts.map((post) =>
         <PostCard post={post} />) : ptbrPosts.map((post) => <PostCard post={post} />)}
    </div>
    </div>
    </>
  );
}