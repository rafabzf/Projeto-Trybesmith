interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

interface IUser {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

interface Order {
  id: number,
  userId: number,
  productsIds: number[],
}

export { IProduct, IUser, Order };