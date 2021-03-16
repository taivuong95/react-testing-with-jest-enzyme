import React from "react";
import PropTypes from "prop-types";
function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState("");
  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
                  placeholder='Enter guess'
                  value={currentGuess}
                  onChange={setCurrentGuess}
        />
              <button
                  data-test='submit-button'
                  onClick={(e) => {e.preventDefault()}}
                  className='btn btn-primary mb-2'>
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
