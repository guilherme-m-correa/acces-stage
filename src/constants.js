"use strict";

const HEADER_SPECIFICATION = {
  registerType: {
    start: 1,
    size: 2,
    type: "N",
  },
  sequentialNumber: {
    start: 3,
    size: 7,
    type: "N",
  },
  cnpj: {
    start: 10,
    size: 15,
    type: "N",
  },
  generationDate: {
    start: 25,
    size: 8,
    type: "N",
  },
  generationHour: {
    start: 33,
    size: 4,
    type: "N",
  },
  description: {
    start: 37,
    size: 25,
    type: "A",
  },
  layoutVersion: {
    start: 62,
    size: 3,
    type: "N",
  },
  filler: {
    start: 65,
    size: 285,
    type: "A",
  },
};

const TRANSACTION_SPECIFICATION = {
  registerType: {
    start: 1,
    size: 2,
    type: "N",
  },
  sequentialNumber: {
    start: 3,
    size: 7,
    type: "N",
  },
  establishmentNumber: {
    start: 10,
    size: 15,
    type: "A",
  },
  establishmentName: {
    start: 25,
    size: 30,
    type: "A",
  },
  lotNumber: {
    start: 55,
    size: 9,
    type: "N",
  },
  installment: {
    start: 64,
    size: 2,
    type: "A",
  },
  plan: {
    start: 66,
    size: 2,
    type: "A",
  },
  nsu: {
    start: 68,
    size: 15,
    type: "A",
  },
  authorization: {
    start: 83,
    size: 15,
    type: "A",
  },
  card: {
    start: 98,
    size: 20,
    type: "A",
  },
  saleDate: {
    start: 118,
    size: 8,
    type: "N",
  },
  creditDate: {
    start: 126,
    size: 8,
    type: "N",
  },
  grossValue: {
    start: 134,
    size: 15,
    type: "N",
  },
  administrativeFee: {
    start: 149,
    size: 15,
    type: "N",
  },
  filler: {
    start: 164,
    size: 15,
    type: "N",
  },
  anticipationFee: {
    start: 179,
    size: 15,
    type: "N",
  },
  liquidValue: {
    start: 194,
    size: 15,
    type: "N",
  },
  anticipationNumber: {
    start: 209,
    size: 11,
    type: "N",
  },
  exportType: {
    start: 220,
    size: 2,
    type: "N",
  },
  status: {
    start: 222,
    size: 2,
    type: "N",
  },
  product: {
    start: 224,
    size: 3,
    type: "N",
  },
  operator: {
    start: 227,
    size: 3,
    type: "N",
  },
  bank: {
    start: 230,
    size: 3,
    type: "N",
  },
  agency: {
    start: 233,
    size: 6,
    type: "A",
  },
  account: {
    start: 239,
    size: 20,
    type: "A",
  },
  reconciliationId: {
    start: 259,
    size: 50,
    type: "A",
  },
  filler2: {
    start: 309,
    size: 41,
    type: "A",
  },
};

const CANCELATION_SPECIFICATION = {
  registerType: {
    start: 1,
    size: 2,
    type: "N",
  },
  sequentialNumber: {
    start: 3,
    size: 7,
    type: "N",
  },
  establishmentNumber: {
    start: 10,
    size: 15,
    type: "A",
  },
  establishmentName: {
    start: 25,
    size: 30,
    type: "A",
  },
  lotNumber: {
    start: 55,
    size: 9,
    type: "N",
  },
  installment: {
    start: 64,
    size: 2,
    type: "A",
  },
  plan: {
    start: 66,
    size: 2,
    type: "A",
  },
  nsu: {
    start: 68,
    size: 15,
    type: "A",
  },
  authorization: {
    start: 83,
    size: 15,
    type: "A",
  },
  card: {
    start: 98,
    size: 20,
    type: "A",
  },
  saleDate: {
    start: 118,
    size: 8,
    type: "N",
  },
  creditDate: {
    start: 126,
    size: 8,
    type: "N",
  },
  grossValue: {
    start: 134,
    size: 15,
    type: "N",
  },
  administrativeFee: {
    start: 149,
    size: 15,
    type: "N",
  },
  liquidValue: {
    start: 164,
    size: 15,
    type: "N",
  },
  filler: {
    start: 179,
    size: 15,
    type: "A",
  },
  exportType: {
    start: 190,
    size: 2,
    type: "N",
  },
  status: {
    start: 192,
    size: 2,
    type: "N",
  },
  product: {
    start: 194,
    size: 3,
    type: "N",
  },
  operator: {
    start: 197,
    size: 3,
    type: "N",
  },
  bank: {
    start: 200,
    size: 3,
    type: "N",
  },
  agency: {
    start: 203,
    size: 6,
    type: "A",
  },
  account: {
    start: 209,
    size: 20,
    type: "A",
  },
  reconciliationId: {
    start: 229,
    size: 50,
    type: "A",
  },
  description: {
    start: 279,
    size: 50,
    type: "A",
  },
  filler2: {
    start: 329,
    size: 21,
    type: "A",
  },
};

const TRAILLER_SPECIFICATION = {
  registerType: {
    start: 1,
    size: 2,
    type: "N",
  },
  sequentialNumber: {
    start: 3,
    size: 7,
    type: "N",
  },
  quantity: {
    start: 10,
    size: 7,
    type: "N",
  },
  filler: {
    start: 17,
    size: 333,
    type: "A",
  },
};

module.exports = {
  HEADER_SPECIFICATION,
  TRANSACTION_SPECIFICATION,
  CANCELATION_SPECIFICATION,
  TRAILLER_SPECIFICATION,
};
