export default  function (state,action) {
    switch (action.type){
        case 'add':
            return [
                ...state,
                {
                    id:Date.now(),
                    title:action.payload,
                    completed: false
                }
            ]
        case 'toggle':
                return state.map(todo => {
                     if(action.payload === todo.id)
                        todo.completed = !todo.completed
                    return todo
                })
        case 'remove':
            return state.filter(todo => action.payload !== todo.id)
        default:
            return state
    }
}
