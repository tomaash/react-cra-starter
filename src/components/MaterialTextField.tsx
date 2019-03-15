import React, { ChangeEvent } from 'react'
import { observer } from 'mobx-react'
import { TextField } from '@material-ui/core'

@observer
export class MaterialTextField extends React.Component<{ field: any }> {
  render() {
    const { field } = this.props
    return (
      <div>
        <TextField
          {...field.bind()}
          helperText={field.error}
          error={!!field.error}
        />
      </div>
    )
  }
}
