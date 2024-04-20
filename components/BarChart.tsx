"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart as BarG,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

const BarChart = (props: Props) => {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarG data={data}>
        <XAxis
          dataKey={"name"}
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          fontSize={12}
        />
        <YAxis
          dataKey={"total"}
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} fillOpacity={0.8} />
      </BarG>
    </ResponsiveContainer>
  );
};

export default BarChart;
