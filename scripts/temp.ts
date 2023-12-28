import { execSync } from 'node:child_process'
import path from 'node:path'

const __dirname = path.resolve()

function copyAndPushToOrigin(sourceDir: string, targetDir: string) {
  try {
    execSync(`cp -r ${sourceDir} ${targetDir}`)

    process.chdir(targetDir)

    execSync('git init')

    execSync('git add .')

    execSync('git commit -m "chore: blog"')

    execSync('git remote add origin https://github.com/ajiu9/ajiu9.github.io')
    execSync('git branch -M gh-pages')
    execSync('git push --force origin gh-pages')
    console.log('Successfully pushed to origin.')
  }
  catch (error) {
    console.error('An error occurred:', error)
  }
}

copyAndPushToOrigin(`${__dirname}/dist`, `${__dirname}/temp`)
