Backendless.initApp("3F4DF6B3-BD68-2097-FFF1-1E29A6C5EC00","89A5E954-BFC0-5152-FF19-99AB46D7CB00");


$(document).on("pageshow","#todoPage", onPageShow);
function onPageShow() {
console.log("page shown");
}

Backendless.Data.of("TASKS").find().then(processResults).catch(error);
function processResults(tasks) {
 



//wipe the list clean
$("#taskList").empty();
  
 //add each tasks
for (var i = 0; i < tasks.length; i++) {
 $("#taskList").append("<li>"+tasks[i].Task+"</li>");
}
 
//refresh the listview
$("#taskList").listview('refresh');
}
 function error(err){
     alert(err); 
 }
    
    
$(document).on("click", "#addTaskButton", onAddTask);
    
function onAddTask() {
console.log("add task button clicked");
    
    var tasktext = $("#addTaskText").val();    
    
var newTask = {};
newTask.Task = tasktext;
    
Backendless.Data.of("Tasks").save(newTask).then(saved).catch(error);
 
}
    
function saved(savedTask) {
console.log( "new Contact instance has been saved" + savedTask);   

   
 
}   
