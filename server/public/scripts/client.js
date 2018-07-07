console.log('js');

const app = angular.module('ToDoApp', []);

let testArray = [];

app.controller('ToDoController', [function () {
    const self = this;



    self.submitToDo = function (newToDo) {
        console.log('to do added');
        console.log(newToDo);
        testArray.push(newToDo);
    }

    self.toDos = testArray;
}]);