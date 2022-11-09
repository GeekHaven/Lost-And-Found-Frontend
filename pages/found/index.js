import Footer from "../../components/interfaces/Footer";
import Category from "../../components/Sections/Category";
import FoundHeader from "../../components/interfaces/FoundHeader";
import Navbar from "../../components/interfaces//Navbar";
import List from "../../components/Sections/List";
import SEO from "../../components/utils/SEO";

import { get } from "../../components/utils/API/index";
import { useRef, useState, useCallback, useEffect } from "react";

export default function Found() {
    const observer = useRef();
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loadMoreItems = async () => {
        if (hasMore) {
            let res = await get(`/found/latest?pagesize=10&pagenumber=${page}`);
            if (page === res.data.total_pages) setHasMore(false);
            console.log(res.data.data);
            setData((prev) => {
                return [...prev, ...res.data.data];
            });
        }
    };
    const lastItemRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
            log(node);
        },
        [loading, hasMore]
    );
    useEffect(() => {
        loadMoreItems();
    }, [page]);
    return (
        <>
            <SEO title="Found / LostNFound" />
            <Navbar />
            <div>
                <FoundHeader />
                <Category />
                <List fref={lastItemRef} data={data} />
            </div>
            <Footer />
        </>
    );
}
