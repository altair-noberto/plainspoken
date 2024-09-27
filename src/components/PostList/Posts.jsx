import PostCard from './PostCard.jsx';

import './PostList.css'
export default function Posts({posts}) {

  // const [language, setLanguage] = useState('')
  // const [message, setMessage] = useState('Alterar Linguagem')

  const Posts = posts.filter((post) => post.data.portuguese !== '');
  // const ptbrPosts = posts.filter((post) => post.data.portuguese === '')

  return (
    <>
    {/* <a style={{cursor: 'pointer', maxWidth: 'fit-content'}} onClick={() => {if(language === '') {setLanguage('pt-br'); setMessage('Change language')} else {setLanguage(''); setMessage('Alterar Linguagem')}}}>{message}</a> */}
    <h2>Posts mais recentes: </h2>
    <br />
    <div class="postList">
      {Posts.map((post) =>
         <PostCard post={post} />)}
    </div>
    </>
  );
}