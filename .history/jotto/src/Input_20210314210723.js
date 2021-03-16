import React from 'react';
import PropTypes from 'prop-types';
function Input({secretWord}) {
    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Enter guess" />
                <button data-test="submit-button"></button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}

export default Input;