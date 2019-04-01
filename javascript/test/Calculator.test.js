import { expect } from "chai";
import Calculator from "../src/Calculator";

describe("CalculatorTest", () => {
  describe("-> Sum", () => {
    it("-> Should sum received numbers", () => {
      expect(Calculator.sum(3, 2)).to.be.equal(5);
    });
  });

  describe("-> Subtract", () => {
    it("-> Should subtract received numbers", () => {
      expect(Calculator.subtract(5, 1, 2)).to.be.equal(2);
    });
  });

  describe("-> Multiply", () => {
    it("-> Should multiply received numbers", () => {
      expect(Calculator.multiply(3, 4, 2)).to.be.equal(24);
    });
  });
});
