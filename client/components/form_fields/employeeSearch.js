import React from 'react'
import Select from 'react-select'

import EmployeeMiniCard from 'components/common/employeeMiniCard'

const SelectedEmployeeRenderer = employee => (
  <span className='SelectedEmployee d-flex align-items-center'>
    <span className='d-flex align-items-center h-100'>{employee.firstName}</span>
  </span>
)

const EmployeeSearch = React.forwardRef((props, ref) => {
  const {
    selectedEmployee, selectedEmployees,
  } = props

  const selectValue = selectedEmployee || selectedEmployees || null

  const getOptions = _.debounce((input, callback) => {
    // TODO: Use API to query for users
  }, 200)

  // By implementing/using this method, we can search by any searchable_fields from User's model
  // Also, this method excludes users that are already selected on the <Select.Async> component
  const filterOptions = (options) => {
    const selectedUsers = selectValue

    if (selectedUsers && _.isArray(selectedUsers)) {
      const selectedUsersIds = selectedUsers.map(user => user.id)
      return options.filter(user => !selectedUsersIds.includes(user.id))
    } else {
      return options
    }
  }

  const employeeOptionRenderer = option => <EmployeeMiniCard key={option.email} employee={option} />

  const conditionalProps = {}

  if (props.disabled) {
    conditionalProps.arrowRenderer = null
  }

  return (
    <div className={`EmployeeSearch ${props.className || ''}`}>
      <Select.Async
        filterOptions={filterOptions}
        disabled={props.disabled || false}
        name='form-field-name'
        autoload={false}
        value={selectValue}
        valueKey='email'
        labelKey='firstName'
        onChange={props.onChange}
        autoFocus={props.autoFocus}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        loadOptions={getOptions}
        optionRenderer={employeeOptionRenderer}
        clearable={props.clearable || false}
        placeholder={props.placeholder || 'Search for someone...'}
        multi={!!props.selectedEmployees}
        valueRenderer={SelectedEmployeeRenderer}
        selectRef={ref}
        {...conditionalProps}
      />
    </div>
  )
})

export default EmployeeSearch
