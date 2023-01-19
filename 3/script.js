$(document).ready(function(){
    $('#getUser').on('click',function(){
		var tek = $('.post').length+1;
		var kol = 2;
        $.ajax({
            type:'POST',
            url:'getData.php',
            dataType: "json",
            data:{tek:tek, kol:kol},
            success:function(data){
			    for (var i=0;i<2;i++){
					$('.recent').append('<div class="post"> <h2>'+data[i].headline+
						'</h2><img style="float: left; wigth: 200px; height: 200px;" src="'+data[i].link+'">'+data[i].prop+'</p></div>');
			    }
            }
        });
    });
	$('#getUser').click();
});