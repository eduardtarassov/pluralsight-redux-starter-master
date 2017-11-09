import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManageCoursePage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
        );
    }
}

ManageCoursePage.propTypes = {
    // myProp: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

// connect function returns a function which is called with CoursesPage param
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
