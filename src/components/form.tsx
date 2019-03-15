import React, { Component } from 'react'
import { observer } from 'mobx-react'
import validatorjs from 'validatorjs'
import MobxReactForm from 'mobx-react-form'
import dvr from 'mobx-react-form/lib/validators/DVR'
import { validators } from 'mobx-react-form'
import { MaterialTextField } from './MaterialTextField'
import axios from 'axios'

console.log(validators)
const plugins = {
  dvr: dvr(validatorjs),
}

const fields = [{
  name: 'first_name',
  label: 'First Name',
  placeholder: 'Insert First Name',
  rules: 'required|string|between:5,25',
}, {
  name: 'last_name',
  label: 'Last Name',
  placeholder: 'Insert Last Name',
  rules: 'required|string|between:5,25',
}]

const hooks = {
  onError: (form) => {
    console.log('HUEHUEHUEHUE')
  },
  onSuccess: (form) => {
    const values = form.values()
    axios.post('https://reqres.in/api/users', values).then(() => {
      console.log('DONE')
    }).catch((e) => {
      console.log('ERROR', e)
    })
  }
}

const form = new MobxReactForm({ fields }, { plugins, hooks })

@observer
export class Form extends Component {

  render() {
    return (
      <form onSubmit={form.onSubmit}>
        <MaterialTextField field={form.$('first_name')} />
        <MaterialTextField field={form.$('last_name')} />

        <br />
        <button type="submit" onClick={form.onSubmit}>Submit</button>
        <button type="button" onClick={form.onClear}>Clear</button>
        <button type="button" onClick={form.onReset}>Reset</button>

        <p>{form.error}</p>
      </form>
    )
  }
}
