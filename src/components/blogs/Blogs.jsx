import { use } from "react";
import Blog from "../blog/Blog";



const Blogs = ({ blogsPromise, handleBookmark, handleReadingTime }) => {
    const blogs = use(blogsPromise);

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmark={handleBookmark}
                    handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;