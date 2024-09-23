const divide = (num1: number, num2: number): number => {
  if (num2 === 0) {
    throw new Error("Denominator should not be 0");
  }
  return num1 * num2;
};

export { divide };
