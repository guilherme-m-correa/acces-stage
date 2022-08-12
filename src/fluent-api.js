"use strict";

const {
  HEADER_SPECIFICATION,
  TRANSACTION_SPECIFICATION,
  CANCELATION_SPECIFICATION,
  TRAILLER_SPECIFICATION,
} = require("./constants");

class FluentAPI {
  #content;

  constructor({ content }) {
    this.#content = content;
  }

  extractData() {
    const [header, ...fileWithoutHeader] = this.#content.split(/\n/);

    const transactions = fileWithoutHeader.filter((line) =>
      line.startsWith("11")
    );

    const cancellations = fileWithoutHeader.filter((line) =>
      line.startsWith("12")
    );

    const trailler = fileWithoutHeader.find((line) => line.startsWith("99"));

    this.#content = {
      header,
      transactions,
      cancellations,
      trailler,
    };

    return this;
  }

  mapFields() {
    const { header, transactions, cancellations, trailler } = this.#content;

    const headerFieldNames = Object.keys(HEADER_SPECIFICATION);

    const headerObject = {};

    for (const fieldName of headerFieldNames) {
      const fieldSpecification = HEADER_SPECIFICATION[fieldName];
      const fieldValue = header.slice(
        fieldSpecification.start - 1,
        fieldSpecification.start + fieldSpecification.size - 1
      );

      headerObject[fieldName] = fieldValue;
    }

    this.#content.header = headerObject;

    this.#content.transactions = transactions.map((transaction) => {
      const transactionFieldNames = Object.keys(TRANSACTION_SPECIFICATION);

      const transactionObject = {};

      for (const fieldName of transactionFieldNames) {
        const fieldSpecification = TRANSACTION_SPECIFICATION[fieldName];
        const fieldValue = transaction.slice(
          fieldSpecification.start - 1,
          fieldSpecification.start + fieldSpecification.size - 1
        );

        transactionObject[fieldName] = fieldValue;
      }

      return transactionObject;
    });

    this.#content.cancellations = cancellations.map((transaction) => {
      const cancelationFieldNames = Object.keys(CANCELATION_SPECIFICATION);

      const cancelationObject = {};

      for (const fieldName of cancelationFieldNames) {
        const fieldSpecification = CANCELATION_SPECIFICATION[fieldName];
        const fieldValue = transaction.slice(
          fieldSpecification.start - 1,
          fieldSpecification.start + fieldSpecification.size - 1
        );

        cancelationObject[fieldName] = fieldValue;
      }

      return cancelationObject;
    });

    const traillerObject = {};

    const traillerFieldNames = Object.keys(TRAILLER_SPECIFICATION);

    for (const fieldName of traillerFieldNames) {
      const fieldSpecification = TRAILLER_SPECIFICATION[fieldName];
      const fieldValue = trailler.slice(
        fieldSpecification.start - 1,
        fieldSpecification.start + fieldSpecification.size - 1
      );

      traillerObject[fieldName] = fieldValue;
    }

    this.#content.trailler = traillerObject;

    return this;
  }

  parseData() {
    const { header, transactions, cancellations, trailler } = this.#content;

    Object.entries(header).forEach(([key, value]) => {
      const fieldType = HEADER_SPECIFICATION[key].type;

      if (fieldType === "N") {
        header[key] = parseInt(value);
      }

      if (fieldType === "A") {
        header[key] = value.trim();
      }
    });

    transactions.forEach((transaction) => {
      Object.entries(transaction).forEach(([key, value]) => {
        const fieldType = TRANSACTION_SPECIFICATION[key].type;

        if (fieldType === "N") {
          transaction[key] = parseInt(value);
        }

        if (fieldType === "A") {
          transaction[key] = value.trim();
        }
      });
    });

    cancellations.forEach((cancelation) => {
      Object.entries(cancelation).forEach(([key, value]) => {
        const fieldType = CANCELATION_SPECIFICATION[key].type;

        if (fieldType === "N") {
          cancelation[key] = parseInt(value);
        }

        if (fieldType === "A") {
          cancelation[key] = value.trim();
        }
      });
    });

    Object.entries(trailler).forEach(([key, value]) => {
      const fieldType = TRAILLER_SPECIFICATION[key].type;

      if (fieldType === "N") {
        trailler[key] = parseInt(value);
      }

      if (fieldType === "A") {
        trailler[key] = value.trim();
      }
    });

    return this;
  }

  build() {
    return this.#content;
  }
}

module.exports = FluentAPI;