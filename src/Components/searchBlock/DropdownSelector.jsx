import React, { memo, useMemo } from 'react'
import '../styles/DropdownSelector.css'

function DropdownSelector({ options, setFiltersState, filterName }) {

  const optionsList = useMemo(() => (
    options.map(item =>(
      { value: item, label: item}
      ))
    ), [options])

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
      {optionsList.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  )
}

export default memo(DropdownSelector)
