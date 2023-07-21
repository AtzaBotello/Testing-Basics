import {add, subtract, multiplication, division, exponential} from "../calculator";

test("adds two numbers correctly", () => {
   expect(add(2,3)).toBe(5); 
});

test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
});

test("multiply two numbers correctly", () => {
    expect(multiplication(2, 3)).toBe(6)
});

test("divide two numbers correctly", () => {
    expect(division(3, 3)).toBe(1)
});

test("divide two numbers incorrectly using 0", () => {
    expect(() => division(2, 0)).toThrow("Cannot divide with 0")
});

test("get the exponential value using 2 inputs", () => {
    expect(exponential(3, 2)).toBe(9)
});