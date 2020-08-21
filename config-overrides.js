/* eslint-disable */
const {override, useBabelRc, useEslintRc} = require(`customize-cra`)

module.exports = {
  webpack: override(useBabelRc(), useEslintRc()),
}
