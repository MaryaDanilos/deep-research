autoformat = (value) => {
    let formatter = '0,0.0000';
    value = Math.round(value * 1000) / 1000
    if (Math.round(value) === value)
        formatter = '0,0'
    else if (Math.round(value * 10) === value * 10)
        formatter = '0,0.0'
    else if (Math.round(value * 100) === value * 100)
        formatter = '0,0.00'
    else if (Math.round(value * 1000) === value * 1000)
        formatter = '0,0.000'}
