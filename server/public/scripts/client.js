console.log('js');

const app = angular.module('ToDoApp', []);


app.controller('ToDoController', ['$http', function ($http) {
    const self = this;

    self.toDos;

    self.getToDos = function () {
        $http({
            url : '/to-dos',
            method : 'GET'
        }).then(function (res) {
            self.toDos = res.data;
            console.log(self.toDos);
        }).catch(function (err) {
            console.log('GET failed. Error:', err);
        });
    }

    self.getToDos();


    self.submitToDo = function (newToDo) {
        console.log('to do added');
        console.log(newToDo);
        $http({
            url : '/to-dos',
            method : 'POST',
            data : newToDo
        }).then(function (res) {
            console.log(res);
            self.getToDos();
        }).catch(function (err) {
            console.log('POST failed. Error:', err);
        });
    }

    self.deleteToDo = function (id) {
        console.log(id);
        console.log('Deleted!');
    }
}]);