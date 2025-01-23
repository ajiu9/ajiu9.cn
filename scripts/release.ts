import { execSync } from 'node:child_process'

function buildAndPush() {
  try {
    execSync('pnpm build', { stdio: 'inherit' })
    execSync('git add .', { stdio: 'inherit' })
    execSync('git commit -m "chore: build"', { stdio: 'inherit' })
    execSync('git push', { stdio: 'inherit' })
    // eslint-disable-next-line no-console
    console.log('Successfully pushed to origin.')
  }
  catch (error) {
    console.error('An error occurred:', error)
  }
}

buildAndPush()
