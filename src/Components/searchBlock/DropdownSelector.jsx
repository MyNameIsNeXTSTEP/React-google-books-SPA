import React, { memo } from 'react'

function DropdownSelector({ options, setFiltersState, filterName }) {

  const optionsList = options.map(item =>
    ({ value: item, label: item, key: item }))
  
  const OptionComponents = optionsList.map((option) => (
    <option key = { option.key}  value = { option.value }>{ option.label }</option>
  ))

  const handleOnChange = (e) => {
		const selectedValue = e.target.value

    setFiltersState((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedValue
    }))
	}

  return (
    <select
      className="dropdown-selector"
			onChange={handleOnChange}
			>
				{OptionComponents}
		</select>
  )
}

export default memo(DropdownSelector)
