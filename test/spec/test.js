/*global describe, it */
'use strict';
(function () {
    describe('the new button', function () {
        it('should make the input appear when clicked', function() {
        	$(".New").click();
            var newButton = $('input').css('display')
            expect(newButton).to.equal('inline-block')
 			//not sure how to test for hiding and showing. put test on hold for now.
        });
        
    });

    describe('the edit button', function () {
        it('should make delete buttons appear when clicked', function () {
            $('.edit').click();
            var deletebutton = $('.btn-danger');
            expect(deletebutton.length).to.equal(1);
        });

    });

    describe('the discard button', function() {
    	it('should clear the input form', function() {
    		$('input').val('hello');
            var newInputVal = $('input').css('placeholder')
    		$('.discard').click();
    		expect(newInputVal).to.equal('');
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