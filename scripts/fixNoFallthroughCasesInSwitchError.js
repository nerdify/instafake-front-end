const fs = require(`fs`)

const file = `${process.cwd()}/node_modules/react-scripts/scripts/utils/verifyTypeScriptSetup.js`

fs.readFile(file, `utf8`, (err, data) => {
  if (err) {
    console.error(err)
  }

  const result = data.replace(
    `noFallthroughCasesInSwitch: { suggested: true },`,
    `// noFallthroughCasesInSwitch: { suggested: true },`
  )

  fs.writeFile(file, result, `utf8`, (err) => {
    if (err) {
      console.error(err)
    }
  })
})
