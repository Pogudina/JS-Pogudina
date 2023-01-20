function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

$(document).ready(function(){
    $('#confirm').on('click', function () {
		let comp= '<td width="70px"><strong>Кубики компьютера</strong></td>';
		let my = '<td width="70px"><strong>Мои кубики</strong></td>';
		let w = '<td>0</td>';
		let l = '';
		let sumM = 0;
		let sumC = 0;
		let wins = 0;
		let loses = 0;
		let win = $('#wer').text();
        console.log('win = $(#wer).text()=',win);
		let lose = $('#asd').text();
		console.log('lose = $(asd).text()=',lose);
        let arrM = [];
        let arrC = [];

        for (let i = 0; i <= $('#kol').val()-1; i++) {
	        arrM[i] = randomInteger(1, 6);
	        arrC[i] = randomInteger(1, 6);
        }
        
        for (let i = 0; i< arrM.length; i++  ) {
            if (arrM[i]!==undefined) {
            my +='<td>'+arrM[i]+'</td>';
            sumM = sumM+arrM[i];
            }
            if (arrC[i]!==undefined) {
            comp +='<td>'+arrC[i]+'</td>';
            sumC = sumC+arrC[i];
            }
        }
        my1.innerHTML = my+='<td>='+sumM+'</td>';
        comp1.innerHTML = comp+='<td>='+sumC+'</td>';
        if (sumM>sumC ) {
            wins=parseInt(win)+1;
             console.log('win+1=',win+1);
             console.log('Pwins=',wins);
            
            wer.innerHTML = wins;
            
        } else if ( sumM<sumC ) {
            loses=parseInt(lose)+1;
             console.log(loses);
             console.log('lose+1=',lose+1);
             console.log('loses=',wins);
              asd.innerHTML = loses;
        }
        if ($('#wer').text()==6 ) {
            alert('Победа');
            document.location.reload();
        } else if ( $('#asd').text()==6 ){
            alert('Поражение');
            document.location.reload();
        }
        
    });

});


