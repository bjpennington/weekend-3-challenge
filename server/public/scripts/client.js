console.log('js');

const app = angular.module('ToDoApp', []);


app.controller('ToDoController', ['$http', function ($http) {
    const self = this;

    self.toDos;

    self.getToDos = function () {
        $http({
            url: '/to-dos',
            method: 'GET'
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
        // if (self.newToDoForm.$invalid) {
        //     return;
        // }
        $http({
            url: '/to-dos',
            method: 'POST',
            data: newToDo
        }).then(function (res) {
            console.log(res);
            self.getToDos();
            self.newToDo = {};
        }).catch(function (err) {
            console.log('POST failed. Error:', err);
        });
    }

    self.deleteToDo = function (id) {
        console.log(id);
        console.log('Deleted!');

        if (confirm('Are you sure you want to delete?')) {

            $http({
                url: `/to-dos/${id}`,
                method: 'DELETE',
            }).then(function (res) {
                console.log(res);
                self.getToDos();
                alert('Task deleted!');
            }).catch(function (err) {
                console.log('DELETE failed. Error:', err);
            });
        }
    }

    self.toggleCompleteToDo = function (toDo) {
        console.log(toDo);
        toDo.completeStatus = !toDo.completeStatus;
        console.log(toDo);
        console.log('toggle complete');

        $http({
            url: `/to-dos/${toDo._id}`,
            method: 'PUT',
            data: toDo
        }).then(function (response) {
            console.log(response);
            self.getToDos();
        }).catch(function (error) {
            console.log('Toggle complete failed. Error:', error);
        });
    }

    // self.addNewCategory = function () {
    //     let newCategory = prompt('New Category:');

    //     if (newCategory == '') {
    //         return;
    //     } else {
    //         return newCategory;
    //     }
    // }
}]);