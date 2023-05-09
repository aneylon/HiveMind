export const stringPermutations = function (input) {
  if (!input || typeof input !== "string")
    return "Please enter a valid string.";

  if (input.length < 2) return [input];

  let results = [];
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    let remainder = input.slice(0, i) + input.slice(i + 1, input.length);

    for (let parts of stringPermutations(remainder)) {
      results.push(current + parts);
    }
  }
  return results;
};
