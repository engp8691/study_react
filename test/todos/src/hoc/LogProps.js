import React from 'react';

function logProps(WrappedComponent) {
	return class extends React.Component {
		componentWillReceiveProps(nextProps) {
			console.log('Current props: ', this.props);
			console.log('Next props: ', nextProps);
		}

		render() {
			// Wraps the input component in a container, without mutating it. Good!
			return <WrappedComponent {...this.props} />;
		}
	}
}

/*
// This following HOC mutated the component. It is not good.
function logProps(InputComponent) {
	InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
		console.log('Current props: ', this.props);
		console.log('Next props: ', nextProps);
	};

	return InputComponent;
}
*/

export default logProps;

