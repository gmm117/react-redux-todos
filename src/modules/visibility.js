// Action Type
const FILTER_TODO = 'todos/FILTER_TODO';
export const FILTER_ALL = 'todos/SHOW_ALL';
export const FILTER_COMPLETE = 'todos/SHOW_COMPLETE';
export const FILTER_NONCOMPLETE = 'todos/SHOW_NONCOMPLETE';

// Action Creator
export const allFilterTodo = () => {
  return {
    type: FILTER_TODO,
    payload: {
      filter: FILTER_ALL,
    },
  };
};

export const completeFilterTodo = () => ({
  type: FILTER_TODO,
  payload: {
    filter: FILTER_COMPLETE,
  },
});

export const nonCompleteFilterTodo = () => ({
  type: FILTER_TODO,
  payload: {
    filter: FILTER_NONCOMPLETE,
  },
});

export default function visibility(state = FILTER_ALL, action) {
  switch (action.type) {
    case FILTER_TODO:
      return action.payload.filter;
    default:
      return state;
  }
}
