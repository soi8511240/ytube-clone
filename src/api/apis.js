import AX from './api/apis.js';

export default {
  getList: (param) => AX.get(`/code/initCodes`),

  // bookmark
  postProductBookmark: (param) =>
    AX.post(`/product/${param.productCode}/bookmark`, param),
};
