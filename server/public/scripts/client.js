console.log('js');

const app = angular.module('ToDoApp', []);

app.controller('ToDoController', [function () {
    const self = this;
    self.test = 'Angular up';
}]);