var app = new Vue({
    el: '#app',
    data: {
        title: 'Make ToDo List',
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo(){
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo(todo){
            var todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone(){
            this.todos.forEach( todo => {
                todo.done = true;
            } )
        }
    }
});