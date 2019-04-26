const react = require('@neutrinojs/react');

const options = {
    babel: {
        presets: [
            [require.resolve('@babel/preset-react'),
                {
                    "throwIfNamespace": false // defaults to true
                }
            ],
        ],
    }
};
module.exports = {
    use: [react(options)],
};