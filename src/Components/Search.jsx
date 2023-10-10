function Search() {
    return ( 
        <form className="max-w-2xlg px-3 ">
        <div className="relative ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-8 h-8 my-auto  text-black right-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-3 pr-4 my-3  text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white"
            />
        </div>
    </form>
     );
}

export default Search;