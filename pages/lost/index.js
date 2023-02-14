import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "../../components/interfaces/Footer";
import Category from "../../components/Sections/Category";
import Navbar2 from "../../components/interfaces//Navbar2";
import List from "../../components/Sections/List";
import LostHeader from "../../components/interfaces/LostHeader/index";
import SEO from "../../components/utils/SEO";
import { get } from "../../components/utils/API";
import PhoneList from "../../components/Sections/PhoneList";

export default function Lost() {
  const observer = useRef();

  const size = 10; //size per page for pagination

  const [loading, setIsLoading] = useState(true),
    [data, setData] = useState([]),
    [page, setPage] = useState(1),
    [hasMore, setHasMore] = useState(true),
    [loadPage, setLoadPage] = useState(true),
    [categories, setCategories] = useState([]),
    [query, setQuery] = useState(""),
    [selectedCategory, setSelectedCategory] = useState(""),
    [sortBy, setSortBy] = useState(true);

  let scrollToRef = useRef();

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
      if (selectedCategory !== "") {
        q += `&tag=${selectedCategory}`;
      }
      let res = await get(q);
      setIsLoading(false);
      setHasMore(res.data.has_next_page);
      setLoadPage(false);
      if (page !== lastLoadedPage) {
        lastLoadedPage = page;
        setData((prev) => {
          return [...new Set([...prev, ...res.data.data])];
        });
      }
    } catch (e) {
      setIsLoading(false);
      setData([]);
    }
  };

  // to check for the last item in the list to call the next page
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => {
            return prev + 1;
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  //get the categories of lost items
  async function getCategories() {
    try {
      let res = await get("/tag/categories");
      setCategories(res.data?.data);
    } catch (e) {}
  }

  //use Effects
  useEffect(() => {
    getCategories();
    setData([]);
    setPage(1);
    lastLoadedPage = 0;
    if (!loadPage) {
      setLoadPage(true);
    }
  }, []);

  useEffect(() => {
    setData([]);
    setHasMore(true);
    setPage(1);
    lastLoadedPage = 0;
    if (!loadPage) {
      setLoadPage(true);
    }
    // if (scrollToRef?.current)
    //   scrollToRef.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
  }, [sortBy, query, selectedCategory]);

  useEffect(() => {
    if (!loadPage) {
      setLoadPage(true);
    }
  }, [page]);

  useEffect(() => {
    loadMoreItems();
  }, [loadPage]);
  ////////////////////////

  return (
    <>
      <SEO title="Lost / Lost&Found" />
      <Navbar2 />
      <div className="">
        <LostHeader setQuery={setQuery} />
        <Category
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {window.innerWidth > 600 && (
          <>
            <List
              ref={scrollToRef}
              fref={lastItemRef}
              data={data}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </>
        )}
        {window.innerWidth <= 600 && (
          <PhoneList
            ref={scrollToRef}
            fref={lastItemRef}
            data={data}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        )}
        {loading && (
          <div className="mb-12">
            <svg
              aria-hidden="true"
              role="status"
              className=" w-12 h-12 text-white animate-spin mx-auto "
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#304AC1"
              />
            </svg>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
