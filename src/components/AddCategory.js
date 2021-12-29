import React, {useState} from "react";
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("Add a category")
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length > 0) {
            setCategories(categories => [inputValue, ...categories])
            setInputValue("")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory