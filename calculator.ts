export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiplication(a: number, b: number): number {
    return a * b;
}

export function division(a: number, b: number) {
    if (b === 0) {
        throw new Error("Cannot divide with 0");
    }

    return a / b;
}

export function exponential(a: number, exp: number) {
    return a**exp;
}