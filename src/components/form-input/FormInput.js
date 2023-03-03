import { useState } from "react";

const FormInput = props => {
    const {
        name,
        id,
        type,
        defaultValue,
        minVal,
        maxVal,
        labelText
    } = props;

    const [val, setVal] = useState(defaultValue || minVal || 0);

    const handleChange = e => {
        e.preventDefault();

        const inputValue = e.target.value;

        if (minVal && inputValue < minVal) return;
        if (maxVal && inputValue > maxVal) return;

        setVal(inputValue);
    }

    return (
        <>
            {labelText && <label htmlFor={name}>{labelText}</label>}
            <input type={type}
                  name={name}
                  id={id} 
                  value={val}
                  onChange={handleChange}
                  />
        </>
    );
}

export default FormInput;
