const MathBasic = {
  _validateArgs(args) {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }

    const [a, b] = args;

    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('fungsi hanya menerima parameter number');
    }

    return args;
  },
  add(...args) {
    const [a, b] = this._validateArgs(args);
    return Math.ceil(a + b);
  },
  subtract(...args) {
    const [a, b] = this._validateArgs(args);
    return Math.ceil(a - b);
  },
  multiply(...args) {
    const [a, b] = this._validateArgs(args);
    return Math.ceil(a * b);
  },
  divide(...args) {
    const [a, b] = this._validateArgs(args);
    return Math.ceil(a / b);
  },
};

module.exports = MathBasic;
