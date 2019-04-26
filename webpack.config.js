const neutrino = require('neutrino');

module.exports = (storybookConfig = {}) => { 
    const neutrinoConfig = neutrino().webpack();
    return { ...neutrinoConfig, ...storybookConfig.config };
}