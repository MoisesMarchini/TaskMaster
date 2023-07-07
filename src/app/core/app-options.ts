const key = 'options'
const defaultOptions: Options = {
  darkMode: false,
}

interface Options {
  darkMode: boolean,
}

export const AppOptions = {
  get options() {
    const storageValues = localStorage.getItem(key);
    if (!storageValues)
      return defaultOptions;

    return JSON.parse(storageValues) as Options;
  },

  set options(value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  get darkMode() {
    return this.options.darkMode;
  },

  set darkMode(value) {
    const _options = this.options;
    _options.darkMode = value;

    localStorage.setItem(key, JSON.stringify(_options));
  },

  clearData() {
    localStorage.removeItem(key);
  }
}
