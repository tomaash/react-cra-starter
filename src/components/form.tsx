import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import validatorjs from 'validatorjs';
const MobxReactForm = require('mobx-react-form').default;
import { MaterialTextField } from './MaterialTextField';
import axios from 'axios';

const plugins = { dvr: validatorjs };


const fields = [{
  name: 'name',
  label: 'Name',
  placeholder: 'Insert name',
  rules: 'required|string|between:5,25',
}, {
  name: 'headline',
  label: 'headline',
  placeholder: 'Insert headline',
  rules: 'required|string|between:5,25',
}];

const hooks = {
  onError: (form) => {
    console.log('HUEHUEHUEHUE');
  },
  onSuccess: (form) => {
    const values = form.values();
    axios.post('http://localhost:8080/catalog/data/merchants', values).then(() => {
      console.log('DONE');
    }).catch((e) => {
      console.log('ERROR', e);
    });
  }
}

const form = new MobxReactForm({ fields }, { plugins, hooks });

@observer
export class Form extends Component {

  render() {
    return (
      <form onSubmit={form.onSubmit}>
          <MaterialTextField field={form.$('name')} />
          <MaterialTextField field={form.$('headline')} />

          <br />
          <button type="submit" onClick={form.onSubmit}>Submit</button>
          <button type="button" onClick={form.onClear}>Clear</button>
          <button type="button" onClick={form.onReset}>Reset</button>

          <p>{form.error}</p>
        </form>
    );
  }
}

