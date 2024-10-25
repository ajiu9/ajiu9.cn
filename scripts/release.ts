import { execSync } from 'node:child_process'

// import path from 'node:path'

// const __dirname = path.resolve()

function buildAndPush() {
  try {
    execSync('pnpm build', { stdio: 'inherit' })
    execSync('git add .', { stdio: 'inherit' })
    execSync('git commit -m "chore: build"', { stdio: 'inherit' })
    execSync('git push', { stdio: 'inherit' })
    execSync('git checkout main && git merge release', { stdio: 'inherit' })
    console.log('Successfully pushed to origin.')
  }
  catch (error) {
    console.error('An error occurred:', error)
  }
}

buildAndPush()
