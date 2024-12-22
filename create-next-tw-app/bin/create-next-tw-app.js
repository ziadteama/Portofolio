#!/usr/bin/env node

const { execSync } = require('child_process')
const { join } = require('path')

const installDependencies = (appName) => {
  const destinationPath = join(process.cwd(), appName)

  try {
    console.log('Installing dependencies for nextv15-tailwindv4-starter...')
    execSync('npm install', { cwd: destinationPath, stdio: 'inherit' })
  } catch (error) {
    console.error('Error installing dependencies:', error)
  }
}

const createNextTwApp = (appName) => {
  const destinationPath = join(process.cwd(), appName)

  try {
    console.log(
      `${appName === '.'
        ? 'Creating nextv15-tailwindv4-starter app...'
        : `Creating nextv15-tailwindv4-starter app '${appName}'...`
      }`
    )

    execSync(
      `git clone https://github.com/cbmongithub/nextv15-tailwindv4-starter  ${destinationPath}`,
      {
        stdio: 'inherit',
      }
    )

    console.log(
      `${appName === '.'
        ? 'nextv15-tailwindv4-starter created successfully!'
        : `nextv15-tailwindv4-starter '${appName}' created successfully!`
      }`
    )
    console.log(
      `${appName === '.'
        ? 'Navigate to your root folder and start building your nextv15-tailwindv4-starter app!'
        : `Navigate to '${appName}' and start building your nextv15-tailwindv4-starter app!`
      }`
    )

    installDependencies(appName)
  } catch (error) {
    console.error('Error:', error)
  }
}

const appName = process.argv[2]

if (!appName) {
  console.error('Please provide an app name.')
  process.exit(1)
}

createNextTwApp(appName)
