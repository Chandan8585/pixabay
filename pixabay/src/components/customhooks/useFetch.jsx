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
            // Construct the URL with pagination
            const apiUrl = `${url}&page=${isNewSearch ? 1 : page}`;
            const res = await fetchImagesFromApi(apiUrl);
            
            if (isNewSearch) {
                setData(res?.hits || []);
                setPage(2); // Reset to page 2 after new search
            } else {
                setData(prevData => [...prevData, ...(res?.hits || [])]);
                setPage(prevPage => prevPage + 1);
            }

            // Pixabay returns maximum 500 images (page 1-50 with per_page=10)
            setHasMore(res?.hits?.length > 0 && (isNewSearch ? true : page * 10 < 500));
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setLoading(false);
        }
    }, [url, page, hasMore]);

    // Function to load more data
    const loadMore = useCallback(() => {
        if (!loading && hasMore) {
            fetchData();
        }
    }, [loading, hasMore, fetchData]);

    // Function to update URL for new searches
    const updateUrl = useCallback((newUrl) => {
        setUrl(newUrl);
    }, []);

    // Initial fetch or fetch when URL changes
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