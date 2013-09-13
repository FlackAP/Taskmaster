/*global describe, it */
'use strict';
(function () {
    describe('the new button', function () {
        it('should make the input appear when clicked', function() {
        	$(".New").click();
 			//hell if i know how to test show vs hide and hell if the internet is going to help me
        });
        
    });

    describe('the discard button', function() {
    	it('should clear the input form', function() {
    		$('input').val('hello')
    		$('.discard').click();
    		expect($('input').val).to.be('');
    	});
    });

})();


//pass done as the argument in a function to make mocha run a test when something is done
//in the expect and error callbacks, use done(). for the error callback, use done(error.description)


//use INSERTDOMELEMENT.find('.classYoureSearching').val('value you want') to fill in a desired value

//var lastTask = $('.main .notes li').last().text() to test the last-submitted task 

// setTimeout(function(){
	//put the variable you're expecting as well as your expect statement

	//(done) the argument in your it statement should be done
// }, 3000 SECOND ARGUMENT IN MILLISECONDS);