export interface IHeaderLinks {
  id: string | number;
  text: string;
  isActive?: boolean;
}

export interface IOrderCard {
  id: string | number;
  orderStatus: string;
  daysLeft: string;
  duration?: string;
  price: string;
}
