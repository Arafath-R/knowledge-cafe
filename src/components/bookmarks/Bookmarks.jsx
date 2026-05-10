
const Bookmarks = ({ bookMarked, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className="border-violet-500 bg-violet-100 p-8 rounded-lg mb-5">
                <h1 className="text-2xl font-bold text-violet-500">Spent Time on Read: {readingTime} min</h1>
            </div>
            <div className="bg-[#1111110d] rounded-lg p-8">
                <h1 className="text-2xl font-bold">Bookmark Blogs : {bookMarked.length}</h1>
                {
                    bookMarked.map((bmTitles, idx) => <div key={idx} className="bg-white p-5 rounded-lg my-4"><p>{bmTitles.title}</p></div>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;