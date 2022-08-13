$(document).ready(function(){
    
	$('#s').keyup(function(){
        var searchField = $(this).val();
		if(searchField === '')  {
			$('#container').html('');
			return;
		}
			
        var regex = new RegExp(searchField, "i");
        var output = '<div class="row">';
        var count = 1;
		$.getJSON('https://brin207.github.io/iPlate/database.json', function(data) {
			$.each(data, function(key, val){
				if ((val.Calories.search(regex) != -1) || (val.Name.search(regex) != -1)) {
				  output += '<div class="col-md-6 well">';
				  output += '<div class="col-md-3"><img class="img" src="images/'+val.Image+'" alt="'+ val.Name +'" /></div>';
				  output += '<div class="col-md-7">';
				  output += '<h5 class="Name">' + val.Name + '</h5>';
				  output += '<p class= "Size">Serving Size:' + val.ServingSize + '</p>'
				  output += '<p class = "Cal">Calories:' + val.Calories + '</p>'
				  output += '</div>';
				  output += '</div>';
				  if(count%1 == 0){
					output += '</div><div class="row">'
				  }
				  count++;
				}
			});
			output +='</div>';
			$('#container').html(output);
		});
    });
});