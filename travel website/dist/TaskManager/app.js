// Initialize Firebase
var config = {
    apiKey: "AIzaSyCN4KB82aEF-f1jQsu_41Os_QcMH9EAqhA",
    authDomain: "brookx3-73468.firebaseapp.com",
    databaseURL: "https://brookx3-73468-default-rtdb.firebaseio.com",
    projectId: "brookx3-73468",
    storageBucket: "brookx3-73468.appspot.com",
    messagingSenderId: "1004382599882",
    appId: "1:1004382599882:web:ddc82414810326d2855233"
  };
  firebase.initializeApp(config);
  
  // Get a reference to the Firebase database
  var database = firebase.database();
  
  // Get references to the HTML elements
  var userList = $('#user-list');
  var taskList = $('#task-list');
  var addTaskButton = $('#add-task-button');
  var newTaskInput = $('#new-task-input');
  var searchInput = $('#search-input');
  
  // Get a reference to the Firebase tasks node
  var tasksRef = database.ref('tasks');
  
  // Display the current tasks and users
  tasksRef.on('value', function (snapshot) {
    var tasks = snapshot.val();
  
    // Clear the task list and user list
    taskList.empty();
    userList.empty();
  
    // Get a list of all the unique users
    var users = [...new Set(Object.values(tasks).map(task => task.user))];
  
    // Add each user to the user list
    users.forEach(function (user) {
      var userListItem = $('<li class="user-list-item">' + user + '</li>');
      userList.append(userListItem);
  
      // Select the user when the user's list item is clicked
      userListItem.click(function () {
        // Highlight the selected user
        userList.children().removeClass('selected');
        userListItem.addClass('selected');
  
        // Display the tasks for the selected user
        taskList.empty();
        Object.keys(tasks).forEach(function (taskId) {
          if (tasks[taskId].user === user) {
            var taskListItem = $('<li>' + tasks[taskId].name + '</li>');
            taskList.append(taskListItem);
          }
        });
      });
    });
  
    // Set the first user as the selected user and display their tasks
    userList.children().first().click();
  });
  
  // Add a new task to the selected user when the 'Add Task' button is clicked
  addTaskButton.click(function () {
    var newTask = newTaskInput.val();
    var selectedUser = userList.children('.selected').text();
    if (newTask && selectedUser) {
      tasksRef.push({
        name: newTask,
        user: selectedUser
      });
      newTaskInput.val('');
    }
  });
  
  // Filter tasks by name when the search input is changed
  searchInput.on('input', function () {
    var searchText = $(this).val().toLowerCase();
    taskList.children().each(function () {
      var taskName = $(this).text().toLowerCase();
      if (taskName.indexOf(searchText) === -1) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
  