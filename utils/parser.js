import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (str) => {
    const value = Number(str);
    return Number.isNaN(value) ? null : { value };
  });

  return _.map(_.compact(numbers), "value");
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}
