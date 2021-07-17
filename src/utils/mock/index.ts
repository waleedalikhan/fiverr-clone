import { IOrderCard } from "../interface";

export const newOrders: IOrderCard[] = [
  {
    id: 1,
    orderStatus: "new order",
    daysLeft: "5 days left",
    duration: "20 hrs",
    price: "$320",
  },
  {
    id: 2,
    orderStatus: "new order",
    daysLeft: "3 days left",
    duration: "4 hrs",
    price: "$85",
  },
];

export const inProgressOrders: IOrderCard[] = [
  {
    id: 1,
    orderStatus: "in progress",
    daysLeft: "Due In 2 days, 5hrs",
    duration: "5 hrs",
    price: "$155",
  },
  {
    id: 2,
    orderStatus: "in progress",
    daysLeft: "Due In 3 days, 2hrs",
    duration: "8 hrs",
    price: "$385",
  },
];

export const deliveredOrders: IOrderCard[] = [
  {
    id: 1,
    orderStatus: "delivered",
    daysLeft: "3 days left",
    duration: "3 hrs",
    price: "$155",
  },
];

export const completedOrders: IOrderCard[] = [
  {
    id: 1,
    orderStatus: "completed",
    daysLeft: "Dec 12, 9:43PM",
    price: "$346",
  },
  {
    id: 2,
    orderStatus: "completed",
    daysLeft: "Dec 13, 8:21PM",
    price: "$320",
  },
  {
    id: 3,
    orderStatus: "cancelled",
    daysLeft: "Dec 12, 9:43PM",
    duration: "20 hrs",
    price: "$320",
  },
];
