import React from 'react';
import successContext from './contexts/successContext';
import languageContext from './contexts/languageContext';
import stringMode from './helpers/strings'
const Congrats = () => {
    const [success] = successContext.useSuccess();
    const language = React.useContext(languageContext);
    if (success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    {stringMode.getStringByLanguage(language, 'congrats')}
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats"></div>
        )
    }
};


export default Congrats;