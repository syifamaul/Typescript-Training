// import logo from './logo.svg';
import './App.css';
import { Card } from './components/card';
import { useGetPosts } from './lib/api-hooks';
import { FetchState } from './lib/types';


function App() {
  const [posts, fetchState, getPosts, clearData] = useGetPosts({url:"https://jsonplaceholder.typicode.com/photos/?_limit=16"});
  
  return (
    <div className="App">
      <header className="App-header">
        <h4 className='text-slate-500'>Helloword</h4>
        <button onClick={ clearData} className='bg-slate-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Clear</button>
        <div className="container">
      <h1>React TypeScript API hooks</h1>
      {fetchState === FetchState.DEFAULT && (
        <>
          <p>
            Hello there, click the button below to get the list of posts from
            the API.
          </p>
                
          <div className="max-w-xs place-items-center bg-indigo-900 text-center py-4 lg:px-4">
            <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
              <span style={{cursor:"pointer"}} className="font-semibold mr-2 text-left flex-auto" onClick={getPosts}>Get Data from API</span>
              <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
          </div>

        </>
      )}
      {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Oops! Something went wrong. Please try again.</p>
          <button onClick={getPosts}>Get Posts</button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <p>Here's the list of posts:</p>
         <ul className='flex flex-wrap items-center justify-center'>
            {posts.map((post, index) => (
              <li key={post.id} className="post">

                <li key={index} className='p-5'><Card image={post.url } description={post.title} title="ABCDEFGHIJKLMNO"/></li>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>

       
        
        
      </header>
 </div>
  );
}

export default App;
