
const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="pb-8 space-y-5">
            <img className="rounded-lg w-full" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <img className="w-14 h-14" src={author_img} alt="" />
                    <div>
                        <h2 className="font-bold text-xl">{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <h4>
                    0<span>{reading_time}</span> min read
                    <button className="btn btn-circle pr-2 m-1" onClick={() => { handleBookmark(blog) }} > <img className="h-5 w-5 inline ml-2" src="https://img.icons8.com/?size=256&id=bBQxLFcauYDQ&format=png" alt="" /></button>
                </h4>
            </div>
            <h1 className="font-bold text-3xl">{title}</h1>
            <p>
                {
                    hashtags.map((hashtag, idx) => <a key={idx} className="pr-2">#{hashtag}</a>)
                }
            </p>
            <button onClick={() => { handleReadingTime(reading_time, id) }} className="text-violet-500 font-bold underline">Mark as read</button>
        </div>
    );
};

export default Blog;