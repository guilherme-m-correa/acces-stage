"use strict";

const FluentAPI = require("./fluent-api");

class Facade {
  #api;

  constructor({ content }) {
    this.#api = new FluentAPI({
      content
    });
  }

  getData() {
    return this.#api
      .extractData()
      .mapFields()
      .parseData()
      .build();
  }
}

module.exports = Facade;
