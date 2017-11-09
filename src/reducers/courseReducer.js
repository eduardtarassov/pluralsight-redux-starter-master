import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function courseReducer(state = initialState.courses, action){
	switch(action.type){
		case types.LOAD_COURSES_SUCCESS:
			return action.courses;


		case types.CREATE_COURSE_SUCCESS:
			return [
				...state, // spread operator
				Object.assign({}, action.course) // keep array immutable (always create a new copy)
			];

		case types.UPDATE_COURSE_SUCCESS:
			return [
				...state.filter(course => course.id !== action.course.id), // Filtering out to have all courses except the one which was updated...
				Object.assign({}, action.course) // and then assign updated course to the copy of array
			];

		default:
			return state;
	}
}
