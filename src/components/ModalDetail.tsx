import React, { FC } from "react";
import { Image, Modal } from "antd";
import { formatISODateToRegularDate } from "../helpers/formatToDate";

interface ModalDetailProps {
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  data: DataProps;
}

interface DataProps {
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const ModalDetail: FC<ModalDetailProps> = ({
  isOpen,
  onClose,
  onSubmit,
  data,
}) => {
  return (
    <Modal open={isOpen} onCancel={onClose} onOk={onSubmit}>
      <section className=" overflow-y-auto">
        <div className=" w-full flex flex-col justify-center mx-auto">
          <Image
            className="  flex justify-center items-center object-cover"
            height={239}
            src={data?.urlToImage}
          />
          <div className=" flex justify-between text-base text-[#71717A] px-1 mt-3">
            <p>{formatISODateToRegularDate(data?.publishedAt)}</p>
            <p>{data?.author}</p>
          </div>
          <p className=" text-xl font-bold my-4">{data?.title}</p>
          <p className=" hidden-text-4-line flex text-base text-[#71717A]">
            {data?.description}
          </p>
          <p className=" text-base">{data?.content}</p>
        </div>
      </section>
    </Modal>
  );
};

export default ModalDetail;
