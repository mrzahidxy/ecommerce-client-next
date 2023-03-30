import React, { useState } from "react";
import { Modal, Select } from "antd";

export const ProductModal = ({
  isVisible,
  setIsVisible,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  submitHandler,
  inputHandler,
}) => {
  const Sizes = ["SM", "MD", "LG", "XLG"];
  const Colors = ["Black", "White", "Red", "Blue", "Green"];

  // console.log(selectedColors, selectedSizes);
  return (
    <>
      <Modal
        title="Create new product"
        open={isVisible}
        onCancel={() => {
          setIsVisible(false);
        }}
        onOk={() => {
          setIsVisible(false);
        }}
        footer={null}
        width={400}
      >
        <form className="w-full">
          <div className="space-2 ">
            <label className="text-gray-600 ">Title:</label>
            <input
              type="text"
              name="title"
              className="input-box"
              autoFocus={false}
              onChange={inputHandler}
            />
          </div>
          <div>
            <label htmlFor="">Description:</label>
            <input
              type="text"
              name="desc"
              className="input-box"
              onChange={inputHandler}
            />
          </div>
          <div>
            <label htmlFor="">Price:</label>
            <input
              type="text"
              name="price"
              className="input-box"
              onChange={inputHandler}
            />
          </div>
          <div className="flex justify-between mt-1">
            <Select
              name="size"
              className="w-full"
              mode="multiple"
              placeholder="Inserted are removed"
              value={selectedSizes}
              onChange={setSelectedSizes}
              options={Sizes.filter((s) => !selectedSizes.includes(s)).map(
                (item) => ({
                  value: item,
                  label: item,
                })
              )}
            />
          </div>
          <div className="flex justify-between mt-1">
            <Select
              name="color"
              className="w-full"
              mode="multiple"
              placeholder="Inserted are removed"
              value={selectedColors}
              onChange={setSelectedColors}
              options={Colors.filter((c) => !selectedColors.includes(c)).map(
                (item) => ({
                  value: item,
                  label: item,
                })
              )}
            />
          </div>
          <button
            type="submit"
            onClick={submitHandler}
            className="w-full p-1 mt-2 rounded-md bg-primary text-white"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};

export const ProductUpdateModal = ({
  updateHandler,
  inputUpdateHandler,
  isUpdateVisible,
  setIsUpdateVisible,
  updatedProductInfo,
}) => {
  return (
    <>
      <Modal
        title="Update product"
        open={isUpdateVisible}
        onCancel={() => {
          setIsUpdateVisible(false);
        }}
        onOk={() => {
          setIsUpdateVisible(false);
        }}
        footer={null}
        width={400}
      >
        <form className="w-full">
          <div className="space-2 ">
            <label className="text-gray-600 ">Title:</label>
            <input
              value={updatedProductInfo.title}
              type="text"
              name="title"
              className="input-box"
              autoFocus={false}
              onChange={inputUpdateHandler}
            />
          </div>
          <div>
            <label htmlFor="">Description:</label>
            <input
              value={updatedProductInfo.desc}
              type="text"
              name="desc"
              className="input-box"
              onChange={inputUpdateHandler}
            />
          </div>
          <div>
            <label htmlFor="">Price:</label>
            <input
              value={updatedProductInfo.price}
              type="text"
              name="price"
              className="input-box"
              onChange={inputUpdateHandler}
            />
          </div>

          <button
            type="submit"
            onClick={updateHandler}
            className="w-full p-1 mt-2 rounded-md bg-primary text-white"
          >
            Submit
          </button>
        </form>
      </Modal>
    </>
  );
};
