import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from 'react-icons/hi2';

function SearchBar({ queryParamKey, pageParamKey, inputPlaceholder, loading }) {
    const [query, setQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const inputRef = useRef();

    useEffect(
        function () {
            const query = searchParams.get(queryParamKey);
            if (query) {
                setQuery(query);
            }
        },
        [searchParams, queryParamKey],
    );

    function handleClear() {
        setQuery('');
        inputRef.current.focus();
        searchParams.set(queryParamKey, '');
        searchParams.set(pageParamKey, 1);
        setSearchParams(searchParams);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (query.trim() === '') return;
        searchParams.set(queryParamKey, query);
        searchParams.set(pageParamKey, 1);
        setSearchParams(searchParams);
    }

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="flex max-w-80 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent has-[:focus]:outline has-[:focus]:outline-[1px] has-[:focus]:outline-blue-400 mx-10 hidden md:block">
                {/* <div className="mx-10 hidden md:block"> */}
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    disabled={loading}
                    // className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400"
                    className="w-32 bg-inherit text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none border-none leading-tight"
                    ref={inputRef}
                    placeholder={inputPlaceholder}
                />
                {query !== '' && (
                    <button type="button" className="ruby" onClick={handleClear}>
                        <ruby>
                            <HiOutlineXMark className="h-5 w-5 flex-shrink-0" />
                        </ruby>
                    </button>
                )}
                {/* </div> */}
            </div>
        </form>
    );
}

export default SearchBar;
