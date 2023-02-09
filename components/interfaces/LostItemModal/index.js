import {
  Divider,
  Tag,
  Button,
  Modal,
  Skeleton,
  Tooltip,
  notification,
} from "antd";
import { BiTimeFive } from "react-icons/bi";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

import ListItemPlaceholder from "../../../assets/illustrations/ListItemPlaceholder.png";
import location from "../../../assets/Location.svg";
import { get, post, remove } from "../../utils/API";

export function LostItemModal({ id, user, router, ...props }) {
  let modal = Modal.info({
    modalRender: () => (
      <DataModal hideModal={hideModal} id={id} user={user} router={router} />
    ),
  });
  const hideModal = () => {
    modal.destroy();
  };
}
function DataModal({ hideModal, id, user, router }) {
  let [data, setData] = useState(null);
  async function getData() {
    let res = await get("/lost/" + id);
    setData(res.data?.data);
  }
  useEffect(() => {
    getData();
  }, []);
  async function markFound() {
    let res = await post("/lost/found", { id: data?.id });
    if (res.data?.status) {
      notification.success({
        message: "Item marked as found",
        description: "Congratulations for getting back your item.",
      });
      hideModal();
      setTimeout(router.reload, 1000);
    }
  }
  async function deleteItem() {
    let res = await remove("/lost/" + data.id);
    if (res.status) {
      notification.info({
        message: "Item deleted",
        description: "The item has been deleted",
      });
      hideModal();
      setTimeout(router.reload, 1000);
    }
  }
  return (
    <Modal
      footer={null}
      closable={true}
      keyboard={true}
      title={null}
      centered={true}
      className="w-[700px]"
      bodyStyle={{ borderRadius: "10px" }}
      onCancel={hideModal}
      open={true}
    >
      {data ? (
        <div className="box flex flex-col justify-evenly px-5 py-1">
          <div className="head  flex flex-row justify-between">
            <div className="h_left flex flex-row items-center">
              <div className="item_name text-2xl text-[#304AC1] font-bold">
                {data.title}
              </div>
              <div className="tag ml-4 sm:mr-4 bg-[#767778] px-3 py-[2px] rounded text-[#ffffff] scale-90">
                Lost
              </div>
            </div>

            <div className="h_right">
              <div className="label text-[#9A9A9A]">Posted By</div>
              <Tooltip title={data.user_id} placement="bottom">
                <div className="username text-md text-[#304AC1] font-bold -mt-1">
                  {data.user_name}
                </div>
              </Tooltip>
            </div>
          </div>
          <Divider className="mt-[4px] mb-4" style={{ background: "#0000" }} />
          <div className="body flex flex-row flex-wrap items-center justify-between w-full">
            <div className="flex flex-grow flex-col flex-wrap text-xs sm:text-sm text-[#9A9A9A]">
              <div className="flex flex-row">
                <BiTimeFive className="mr-1 sm:text-lg sm:mb-[0.1rem]" />
                {moment(data.lostDate).fromNow()}
              </div>
              <div className="left">
                <Image
                  src={data.image || ListItemPlaceholder}
                  width="280"
                  height="280"
                />
              </div>
            </div>
            <div className="flex flex-col flex-grow sm:flex-col justify-between">
              <div className="item_lost_location flex flex-wrap items-center text-[#304AC1] font-medium text-lg">
                <div className="mt-2 mr-1">
                  <Image src={location}></Image>
                </div>
                <div> {data.location} </div>
              </div>
              <div className="item_desc mt-0 mb-8 text-[#575C75] tracking-wide text-[14px]">
                {data.description}
              </div>
              <div className="contact">
                <div className="label mb-1">Contact Details</div>
                <div className="ph font-semibold text-[#091553]">
                  {data.contactPhone}
                </div>
                {data.contactEmail && (
                  <div className="email font-semibold text-[#091553] ">
                    {data.contactEmail}
                  </div>
                )}
              </div>
              {data.user_id === user.username && (
                <div className="action mt-5 flex justify-between sm:justify-start">
                  <Button
                    className="found text-[#ffffff] w-28 sm:w-40 sm:mr-5 tracking-wide rounded-md bg-[#304AC1] p-2 px-4 text-[0.65rem]"
                    onClick={markFound}
                  >
                    Mark as Found
                  </Button>
                  <Button
                    danger
                    className="text-[#E2494F] w-28 border-solid sm:w-40 font-semibold tracking-wide border-2 rounded-md border-[#E2494F] p-2 px-4 text-[0.65rem]"
                    onClick={deleteItem}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </div>
          {data.tag && (
            <div className="tags sm:mt-5">
              {data &&
                data.tag &&
                data.tag.length > 0 &&
                data.tag.map((tag, i) => (
                  <Tag
                    className="border-none text-[#9A9A9A] text-xs sm:text-sm bg-white -mr-1"
                    key={i}
                  >
                    #{tag}
                  </Tag>
                ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <Skeleton.Input active block />
          <Divider className="my-4" style={{ background: "#0000" }} />
          <div className="flex flex-row w-[100%] h-72">
            <div className="w-[50%] h-full">
              <Skeleton.Image active className="w-[100%] h-full" />
            </div>
            <div className="w-[50%] h-full flex flex-col p-4 gap-1">
              <Skeleton.Input active className="mb-1" />
              <Skeleton.Input active block size="small" />
              <Skeleton.Input active block size="small" className="mb-1" />
              <Skeleton.Input active size="small" />
              <Skeleton.Input active size="small" className="mb-1" />
              <div className="flex flex-row justify-between">
                <Skeleton.Button active />
                <Skeleton.Button active />
              </div>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
