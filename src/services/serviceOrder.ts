import modelOrder from '../models/modelOrder';

const all = async () => {
  const result = await modelOrder.all();

  return result;
};

export default {
  all,
};