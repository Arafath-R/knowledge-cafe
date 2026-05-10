import Navbar from './components/navbar/Navbar'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { Suspense, useState } from 'react'

const fetchBlogs = async () => {
  const res = await fetch('/blogs.json');
  return res.json();
}

  const blogsPromise = fetchBlogs();
function App() {


  const [bookMarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookMarked, blog];
    setBookmarked(newBookmarks);
  }

  const handleReadingTime = (reading_time, id) => {
    const totalTime = readingTime + reading_time;
    setReadingTime(totalTime);

    const remainingBookmarks = bookMarked.filter(bookmarks => bookmarks.id !== id);
    setBookmarked(remainingBookmarks)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='md:flex max-w-300 mx-auto px-5 md:px-0 pt-8 gap-6'>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Blogs blogsPromise={blogsPromise} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
          <Bookmarks bookMarked={bookMarked} readingTime={readingTime}></Bookmarks>
        </Suspense>
      </div>
    </>
  )
}

export default App
