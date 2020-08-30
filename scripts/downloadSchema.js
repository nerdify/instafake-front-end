const fetch = require(`node-fetch`)
const fs = require(`fs`)
const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} = require(`graphql`)
const path = require(`path`)

function getRemoteSchema() {
  return fetch(process.env.REACT_APP_GRAPHQL_ENDPOINT, {
    body: JSON.stringify({query: getIntrospectionQuery()}),
    headers: {'Content-Type': `application/json`},
    method: `POST`,
  }).then((res) => res.json())
}

function printToFiles(response, type = `graphql`) {
  try {
    const schema = buildClientSchema(response.data)

    if (type === `graphql`) {
      fs.writeFileSync(
        path.join(process.cwd(), `data`, `schema.graphql`),
        printSchema(schema)
      )
    } else {
      fs.writeFileSync(
        path.join(process.cwd(), `data`, `schema.json`),
        JSON.stringify(response, null, 2)
      )
    }
  } catch (err) {
    console.error(err)
  }
}

async function run() {
  const schema = await getRemoteSchema()

  printToFiles(schema)
}

run()
