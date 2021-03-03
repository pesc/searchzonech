import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'

export function getFilterValueDisplay(filterValue) {
    if (filterValue === undefined || filterValue === null) return ''
    if (filterValue.hasOwnProperty('name')) return filterValue.name
    return String(filterValue)
}

export default function SortView({ className, label, onChange, options, value }) {
    const selectedValue = value
    const selectedOption = selectedValue ? options.find((option) => option.value === selectedValue) : null
    return (
        <FormControl
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginBottom: 20,
            }}
        >
            <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
            <NativeSelect
                value={selectedOption.value}
                onChange={(o) => onChange(o.target.value)}
                inputProps={{ 'aria-label': 'Test' }}
            >
                {options.map((result) => (
                    <option key={String(result.value)} value={String(result.value)}>
                        {result.label}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}
