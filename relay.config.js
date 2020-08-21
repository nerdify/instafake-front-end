// Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
module.exports = {
  exclude: [`**/node_modules/**`, `**/__mocks__/**`, `**/__generated__/**`],
  extensions: [`js`, `ts`, `tsx`],
  language: `typescript`,
  noFutureProofEnums: false,
  schema: `./data/schema.graphql`,
  src: `./src`,
  customScalars: {
    Date: `String`,
    DateTime: `String`,
    Decimal: `String`,
    Email: `String`,
    URI: `String`,
  },
}
