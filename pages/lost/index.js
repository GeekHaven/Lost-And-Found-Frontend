import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "../../components/interfaces/Footer";
import Category from "../../components/Sections/Category";
import Navbar from "../../components/interfaces//Navbar";
import List from "../../components/Sections/List";
import LostHeader from "../../components/interfaces/LostHeader/index";
import SEO from "../../components/utils/SEO";
import { get } from "../../components/utils/API";
export default function Lost() {
    const observer = useRef();
    const size = 10;
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loadPage, setLoadPage] = useState(true);
    const [categories, setCategories] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [sortBy, setSortBy] = useState(true);

    let lastLoadedPage = 0;
    const loadMoreItems = async () => {
        if (!loadPage) return;
        if (!hasMore) return;
        setIsLoading(true);

        try {
            let q = `/lost/latest?pagesize=${size}&pagenumber=${page}&order=${
                sortBy ? "descending" : "ascending"
            }`;
            if (query !== "") {
                q += `&q=${query}`;
            }
            if (selectedCategories.length > 0) {
                q += `&tag=${selectedCategories.join(";")}`;
            }
            let res = await get(q);
            setIsLoading(false);
            setHasMore(res.data.has_next_page);
            setLoadPage(false);
            console.log(res.data.data);
            if (page !== lastLoadedPage) {
                lastLoadedPage = page;
                setData((prev) => {
                    return [...new Set([...prev, ...res.data.data])];
                });
            }
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setData([]);
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
            // log(node);
        },
        [loading, hasMore]
    );

    async function getCategories() {
        let res = await get("/tag/categories");
        setCategories(res.data?.data);
    }

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        setData([]);
        setPage(1);
        if (!loadPage) {
            setLoadPage(true);
        }
    }, [sortBy, query, selectedCategories]);

    useEffect(() => {
        if (!loadPage) {
            setLoadPage(true);
        }
    }, [page]);

    useEffect(() => {
        loadMoreItems();
    }, [page]);

    return (
        <>
            <SEO title="Lost / LostNFound" />
            <Navbar />
            <div className="">
                <LostHeader />
                <Category categories={categories} />
                <List
                    fref={lastItemRef}
                    data={data}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />
            </div>
            <Footer />
        </>
    );
}
