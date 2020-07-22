import { nameof } from "utils/common";

export const throwIfNull = argumentObj => {
  const argumentName = nameof(argumentObj);
  const argumentValue = argumentObj[argumentName];

  if (argumentValue === null) {
    throw new Error(`Parameter '${argumentName}' can't be null`);
  }

  if (typeof argumentValue === "undefined") {
    throw new Error(`Parameter '${argumentName}' can't be undefined`);
  }
};

export const throwIfNullOrEmpty = argumentObj => {
  throwIfNull(argumentObj);

  const argumentName = nameof(argumentObj);
  const argumentValue = argumentObj[argumentName];

  if (typeof argumentValue === "string" && argumentValue.length === 0) {
    throw new Error(`Parameter '${argumentName}' can't be empty string`);
  }
};
