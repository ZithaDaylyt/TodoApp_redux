import { connect } from 'react-redux';
import TodoList from './components/TodoList';

const getVisibleTodos = (todos,filter)=>{
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return
    }
}

const mapStateToProps = state => {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
};
// const mapDispatchToProps = dispatch =>(
//     toggleTodo : id=> dispatch(toggleTodo(id)) 
// );

export default connect()(TodoList);