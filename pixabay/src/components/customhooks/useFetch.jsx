import { useEffect, useState, useCallback } from "react";
import fetchImagesFromApi from "./fetchImagesFromApi";

const useFetch = (initialUrl) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [url, setUrl] = useState(initialUrl);

    const fetchData = useCallback(async (isNewSearch = false) => {
        if (!hasMore && !isNewSearch) return;
        
        setLoading(true);
        setError(null);

        try {
            const apiUrl = `${url}&page=${isNewSearch ? 1 : page}`;
            const res = await fetchImagesFromApi(apiUrl);
            
            if (isNewSearch) {
                setData(res?.hits || []);
                setPage(2); 
            } else {
                setData(prevData => [...prevData, ...(res?.hits || [])]);
                setPage(prevPage => prevPage + 1);
            }

            setHasMore(res?.hits?.length > 0 && (isNewSearch ? true : page * 10 < 500));
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setLoading(false);
        }
    }, [url, page, hasMore]);

    const loadMore = useCallback(() => {
        if (!loading && hasMore) {
            fetchData();
        }
    }, [loading, hasMore, fetchData]);

    const updateUrl = useCallback((newUrl) => {
        setUrl(newUrl);
    }, []);

    useEffect(() => {
        if (url) {
            fetchData(true);
        }
    }, [url]);

    return { 
        data, 
        loading, 
        error, 
        loadMore, 
        hasMore,
        updateUrl
    };
};

export default useFetch;