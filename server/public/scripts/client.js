console.log('js');

const app = angular.module('ToDoApp', []);

app.controller('ToDoController', [function () {
    const self = this;
    self.submitToDo = function () {
        console.log('to do added');
    }
}]);