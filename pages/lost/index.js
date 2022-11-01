import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "../../components/interfaces/Footer";
import Category from "../../components/Sections/Category";
import FoundHeader from "../../components/interfaces/FoundHeader";
import Navbar from "../../components/interfaces//Navbar";
import List from "../../components/Sections/List";
import LostHeader from "../../components/interfaces/LostHeader/index";
import SEO from "../../components/utils/SEO";
import { get } from "../../components/utils/API";
export default function Lost() {
    const observer = useRef();
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const loadMoreItems = async () => {
        if (hasMore) {
            let res = await get(`/lost/latest?pagesize=10&pagenumber=${page}`);
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
            <SEO title="Lost / LostNFound" />
            <Navbar />
            <div className="">
                <LostHeader />
                <Category />
                <List fref={lastItemRef} data={data} />
            </div>
            <Footer />
        </>
    );
}
