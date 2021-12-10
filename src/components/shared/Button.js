import PropTypes from 'prop-types';

// children, version, type and isDisabled are destructured props
function Button({ children, version, type, isDisabled }) {
    return (
        <button 
            type={type} 
            disabled={isDisabled} 
            // btn-${version} is from whatever CSS btn version (btn-primary or btn-secondary)from index.css
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: '',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;