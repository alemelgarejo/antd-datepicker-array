import { NextPage } from "next";
import React, { useState } from "react";
import moment, { Moment, MomentInput } from "moment";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { useEffect } from "react";

const Home: NextPage = () => {
  const data = [
    {
      date: "2022-08-10"
    }, 
    {
      date: "2022-08-12"
    },
    {
      date: "2022-08-20"
    }
  ]
  const dates: any = useState([]);

  useEffect(() => {
    data.forEach(date => {
      dates.push(date.date)
    });    
  }, [/* data, dates */])

  const disabledDate = (current: any) => {
    for (let i = 0; i < dates.length; i++) {
      if(current?.date() === moment(dates[i]).date() && current?.month() === moment(dates[i]).month() && current?.year() === moment(dates[i]).year()){
        return true;
      } else if (current.valueOf() < Date.now()) {
        return current && current.valueOf() < Date.now()
      }
    }
    return false;
  };

  return (
    <>
      <DatePicker picker="date" disabledDate={disabledDate} allowClear onChange={(e: any) => {console.log((e._d.getMonth()+'-'+e._d.getDate())+'-'+e._d.getFullYear())}}/>
    </>
  );
};

export default Home;
