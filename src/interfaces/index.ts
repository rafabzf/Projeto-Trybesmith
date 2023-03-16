interface IProduct {
  id?: number;
  name: string;
  amount: string;
}

interface IUser {
  id?: number;
  username: string;
  vocation: string;
  level: string;
  password: string;
}

export { IProduct, IUser };