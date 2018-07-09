// set up angular app
const app = angular.module('ToDoApp', []);

// set up angular ToDo controller with $http
app.controller('ToDoController', ['$http', function ($http) {
    const self = this;

    // establish empty toDos variable for later use
    self.toDos;

    // GET function for /to-dos
    self.getToDos = function () {
        // request data from back end
        $http({
            url: '/to-dos',
            method: 'GET'
            // store data sent from back end in self.toDos variable for access in index
        }).then(function (res) {
            self.toDos = res.data;
            // log error
        }).catch(function (err) {
            console.log('GET failed. Error:', err);
        });
    }

    // call get to-dos (for initial page load)
    self.getToDos();

    // POST function for /to-dos
    self.submitToDo = function (newToDo) {
        // send submitted inputs to back end
        $http({
            url: '/to-dos',
            method: 'POST',
            data: newToDo
        }).then(function (res) {
            // call getToDos to refresh DOM
            self.getToDos();
            // clear inputs
            self.newToDo = {};
            // log error
        }).catch(function (err) {
            console.log('POST failed. Error:', err);
        });
    }

    // DELETE function for /to-dos
    self.deleteToDo = function (id) {
        // confirm delete before sending delete
        if (confirm('Are you sure you want to delete?')) {
            // send delete request to back end using id data
            $http({
                url: `/to-dos/${id}`,
                method: 'DELETE',
            }).then(function (res) {
                // call getToDos to refresh DOM
                self.getToDos();
                // send alert to user that task has been deleted
                alert('Task deleted!');
                // log error
            }).catch(function (err) {
                console.log('DELETE failed. Error:', err);
            });
        }
    }

    // PUT function to change complete status for /to-dos
    self.toggleCompleteToDo = function (toDo) {
        // change to-do completeStatus from false to true (or vice versa)
        toDo.completeStatus = !toDo.completeStatus;
        // send complete toDo object to back end using specific url for id
        $http({
            url: `/to-dos/${toDo._id}`,
            method: 'PUT',
            data: toDo
        }).then(function (response) {
            // call getToDos to refresh DOM
            self.getToDos();
            // log error
        }).catch(function (error) {
            console.log('Toggle complete failed. Error:', error);
        });
    }
}]);