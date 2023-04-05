import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const creativity: string = core.getInput('creativity')
    core.debug(`Creativity level: ${creativity}`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    core.debug(new Date().toTimeString())
    await wait(1000)
    core.debug(new Date().toTimeString())

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
