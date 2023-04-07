import * as core from '@actions/core'
import {context, getOctokit} from '@actions/github'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const eventName = context.eventName
    const creativity: string = core.getInput('creativity')
    core.debug(`Event "${eventName}" with creativity level: ${creativity}`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    const ghToken = core.getInput('ghToken')
    const octokit = getOctokit(ghToken)

    // Events for the same issue can be triggered multiple times
    // Need to restore state from the issue
    const issueNumber = context.issue.number

    core.debug(new Date().toTimeString())
    await wait(1000)
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
