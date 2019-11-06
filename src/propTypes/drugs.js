import PropTypes from 'prop-types';

export const drugPropType = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
	description: PropTypes.string,
    imageUrl: PropTypes.string,
    producer: PropTypes.string,
    activeSubstances: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.number
    })),
    formulation: PropTypes.string,
    drugEffect: PropTypes.string
});

export const drugsPropType = PropTypes.arrayOf(drugPropType);