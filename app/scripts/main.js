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
  		var task = new TaskClass();
  		task.set('taskName', $('input').val());
 
  		task.save(null, {
    		success: function(result){
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
  var li = $('<li>'+task.get('taskName')+'</li>')
  $('.tasks').append(li)
  showTasks()
};

function showTasks(task) {
	var task= new TaskClass();
	$('input').val(task.get('taskName') )
};

function editTasks(checkbox) {
  var deletebox = $('<button type="button" class="btn btn-danger">Delete</button>')
  $('.edit').click( function() {
    $('li').append(deletebox);
  });  
}

 

