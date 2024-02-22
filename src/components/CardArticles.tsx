import React, { useState } from "react";
import { Card, Image, Button } from "antd";
import { formatISODateToRegularDate } from "../helpers/formatToDate";
import ModalDetail from "./ModalDetail";

function CardArticles(props: any) {
  const formattedPublishedAt = formatISODateToRegularDate(props.publishedAt);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <ModalDetail
        isOpen={isOpen}
        onClose={toggleModal}
        data={props}
        onSubmit={toggleModal}
      />
      <Card className="bg-transparent flex flex-col items-start w-fit pb-4  hover:cursor-pointer hover:border-[#919191] transition-all">
        <div className=" w-full flex flex-col justify-center mx-auto">
          <Image
            className="  flex justify-center items-center object-cover"
            height={239}
            src={props?.urlToImage}
          />
          <div onClick={toggleModal}>
            <div className=" flex justify-between text-base text-[#71717A] px-1 mt-3">
              <p>{formattedPublishedAt}</p>
              <p>{props?.author}</p>
            </div>
            <p className=" text-xl font-bold my-4">{props?.title}</p>
            <p className=" hidden-text-4-line flex text-base text-[#71717A]">
              {props?.description}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}

export default CardArticles;
