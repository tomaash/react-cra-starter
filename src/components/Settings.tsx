import React, { Component } from 'react'
import { observer } from 'mobx-react'
import validatorjs from 'validatorjs'
import MobxReactForm from 'mobx-react-form'
import dvr from 'mobx-react-form/lib/validators/DVR'
import { MaterialTextField } from './MaterialTextField'
import axios from 'axios'
import { RouteComponentProps } from '@reach/router'
import { Button } from '@material-ui/core'

const plugins = {
  dvr: dvr(validatorjs)
}

const fields = {
  first_name: {
    label: 'First Name',
    placeholder: 'Insert First Name',
    rules: 'required|string|between:5,25',
    default: 'John'
  },
  last_name: {
    label: 'Last Name',
    placeholder: 'Insert Last Name',
    rules: 'required|string|between:5,25',
    default: 'Doe'
  }
}

const hooks = {
  onError: form => {
    console.error('Form Error')
  },
  onSuccess: async form => {
    const values = form.values()
    const result = await axios.post('https://reqres.in/api/users', values)
    console.log(result.data)
  }
}

const form = new MobxReactForm({ fields }, { plugins, hooks })

@observer
export class Settings extends Component<RouteComponentProps> {
  render() {
    return (
      <div className='p-8'>
        <form onSubmit={form.onSubmit}>
          <MaterialTextField field={form.$('first_name')} />
          <MaterialTextField field={form.$('last_name')} />

          <br />
          <Button
            className='mr-2'
            variant='outlined'
            color='primary'
            onClick={form.onSubmit}
          >
            Submit
          </Button>
          <Button
            className='mr-2'
            variant='outlined'
            color='secondary'
            onClick={form.onClear}
          >
            Clear
          </Button>
          <Button variant='outlined' onClick={form.onReset}>
            Reset
          </Button>

          <p>{form.error}</p>
        </form>
      </div>
    )
  }
}
