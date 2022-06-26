import { NextPage } from "next";
import React, { useState } from "react";
import moment from "moment";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

const Home: NextPage = () => {
  const dates = ["2018-08-10", "2018-08-12", "2018-08-20"];
  const disabledDate = (current: any) => {
    for (let i = 0; i < dates.length; i++) {
      if(current?.date() === moment(dates[i]).date() && current?.month() === moment(dates[i]).month()){
        return true;
      }     
    }
    return false;
  };

  return (
    <>
      <DatePicker picker="date" disabledDate={disabledDate} allowClear />
    </>
  );
};

export default Home;
