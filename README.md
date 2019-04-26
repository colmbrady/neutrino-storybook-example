# Neutrino Storybook integration
This repo attempts to show how neutrino config can be used to configure storybook.

Notice how the `.neutrinorc.js` provides babel config that enables using `<f:image />` in JSX.

Ideally, this babel config should be used by storybook also so that we dont have to duplicate it.

Whats the recommended way to do this?