Parse.initialize("rrzAqdeNHm7qg8o6BPWFjIFW53gKolV2a9ALjknj", "Qd2xlYVSeV595weXUhWTixs3yz3B5gzz7TVMp1iS");

$(document).ready(function(){
  	$(".input").hide();

  	$(".New").click(function(){
  		$(".input").show();
  	});
});

var TaskClass = Parse.Object.extend("Task");
var TaskCollectionClass = Parse.Collection.extend({
  	model: TaskClass
});
var tasks = new TaskCollectionClass()

tasks.fetch({
  	success: function(collection) {
   		collection.each(function(note){
     			createTask(note)
   		})
  	}
});

$('.submit').click(function(){
	if (validateForm()) {
      var randomNumber = Math.floor(Math.random()*9999999)
  		var task = new TaskClass();
  		task.set('taskName', $('input').val());
      task.set('taskId', randomNumber)
 
  		task.save(null, {
    		success: function(result){
          console.log(result.objectId)
      		createTask(result)
      		$('.input').hide()

    		},
    		error: function(result, error){
    		}
    	});	
  	}
})

$('.discard').click(function(){
	$('input').val('');
	$('.input').hide();
  $('input').removeClass("warning")
})

function validateForm() {
	var good=true																				
	$('input').removeClass("warning")
	$('input').each(function(){
		if ($(this).val() == "") {
			console.log("you made a goof");
			good=false
			$(this).addClass("warning")
 
		}
	})
	console.log(good)
	return good
}

function createTask(task) {
  var li = $('<li class='+task.get("taskId")+'>'+task.get('taskName')+'<button type="button" id='+task.get("taskId")+' class="btn delete btn-danger">x</button></li>')
  $('.tasks').append(li)
  showTasks()

};

function showTasks(task) {
	var task= new TaskClass();
	$('input').val(task.get('taskName'))
}

function editTasks(task) {
  $('.tasks').toggleClass('active') //Much Simpler

  $('.delete').click(function(){
    deleteTask(task, event)
  })
  
  //UGLY OLD WAY OF ADDING DELETE BOXES
  // $('.tasks li').each(function(){
  //     var deletebox = $('<button type="button" class="btn delete btn-danger">x</button>')
  //     console.log($(this).find('.delete'))
  //     if ($(this).find('.delete').length) {
  //       $(this).find('.delete').remove();
  //       console.log('gonna detel the button')
  //     }
  //     else {
  //       $(this).append(deletebox);
  //     }
  // });  
};

$('.edit').click(editTasks);

function deleteTask(task, event) {

  var clickedId = event.target.id
  console.log("this here was clicked", clickedId)
  var query = new Parse.Query(TaskClass);
  var id = parseInt(clickedId)
  $("."+id).hide()
  query.equalTo("taskId", id)
  query.find({
    success: function(taskToDestroy) {
      console.log("Successfully retrieved " + taskToDestroy);
      var task = taskToDestroy[0]
      task.destroy({
        success: function(stuff){
          console.log("destroyed!!!!!!!")
        },
        error: function(stuff, error){
          console.log("error, shit")
        }
      })
    }
  });

}

