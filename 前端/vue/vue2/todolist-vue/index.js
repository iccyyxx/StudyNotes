// 读取本地数据，渲染页面
var vm = new Vue({
    el: "#all-list",
    data: {
        todoList: JSON.parse(localStorage.todoList),
        todoContent: '',
        doneNum: 0,
        todoNum: 0
    },
    methods: {
        doneList: function () {
            return this.todoList.filter(function (item) {
                return item.done;
            })
        },
        save: function () {
            this.doneNum = this.todoList.filter(function (item) {
                return item.done;
            }).length;
            this.todoNum = this.todoList.filter(function (item) {
                return !item.done;
            }).length;
            localStorage.setItem("todoList", JSON.stringify(this.todoList))
        },
        add: function () {
            this.todoList.push({ "title": this.todoContent, "done": false });
            this.todoContent = '';
            this.save();
        },
        change: function (todo) {
            // 读取当前数据并改变状态
            todo.done = !todo.done;
            this.save();
        },
        del: function (item) {
            console.log(item);
            this.todoList.splice(item, 1);
            this.save();
        }
    }
});
vm.save();