(function(){
	var commentModel = function(){
		var self = this;
		
		self.newComment = ko.observable("Please add your comment here");
		self.newAuthor =  ko.observable("User");
		self.newDate =  ko.observable("8/10/2015");
		var todayDate = new Date();
		var dateStr = todayDate.getMonth()+'/'+todayDate.getDay()+'/'+todayDate.getFullYear()

		self.comment = ko.observableArray([
			{id:1,author:'Kumar',message:'This is a sample comment', date:'9/22/2014'},
			{id:2,author:'Raman',message:'This is another sample comment', date:'9/23/2014'}
		]);
		
		self.addComment= function(){
			self.comment.push({author:'User',message:self.newComment(),date:dateStr});
		}
	};
	
	ko.applyBindings(new commentModel());
})()