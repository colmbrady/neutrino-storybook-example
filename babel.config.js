const neutrino = require('neutrino');

// Maybe this is an option after https://github.com/storybooks/storybook/issues/6633 lands???
module.exports = (api) => { 
    api.cache(true);
    const babel = neutrino().babel();
    // Remove config that cant be global.
    const { cacheDirectory, configFile, ...rest } = babel;
    return rest;
};
