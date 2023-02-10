import ListItem from "../../interfaces/ListItem";
import { BsTriangleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { forwardRef } from "react";

let List = forwardRef(({ data, fref, sortBy, setSortBy }, ref) => {
  const router = useRouter();
  return (
    <div className="mt-20 px-36 md:px-12 mb-12 flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center">
        <div className="text-4xl font-semibold text-[#575c75] ">
          Complete List
        </div>
        <button
          className=" text-xl font-normal text-[#575c75]"
          onClick={() => {
            setSortBy((sort) => {
              return !sort;
            });
          }}
        >
          Sort By{" "}
          <span>
            {sortBy ? (
              <BsTriangleFill color="currentcolor" className="inline" />
            ) : (
              <BsTriangleFill
                color="currentcolor"
                className="inline rotate-180"
              />
            )}
          </span>
        </button>
      </div>
      <div className="w-full" ref={ref}>
        <div className="bg-[#304ac1] rounded-xl py-7 text-[#ffffff]  flex flex-row justify-between items-center px-6 ">
          <div className="font-medium text-xl w-36 text-center">Photo</div>
          <div className="font-medium text-xl w-48 text-center">Name</div>
          <div className="font-medium text-xl w-[35vw] text-center sm:hidden">
            Description
          </div>
          <div className="font-medium text-xl w-32 text-center">
            {`Date ${router.asPath === "/lost" ? "Lost" : "Found"}`}
          </div>
          <div className="font-medium text-xl w-32 text-center">Location</div>
        </div>
        {data &&
          data.length > 0 &&
          data.map((item, i) => {
            if (data.length === i + 1) {
              return <ListItem key={i} item={item} fref={fref} />;
            } else return <ListItem key={i} item={item} />;
          })}
        {data?.length === 0 && (
          <h3 className="text-2xl  text-[#575c75] text-center py-5">
            No Items Found
          </h3>
        )}
      </div>
    </div>
  );
});

export default List;
