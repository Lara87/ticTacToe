var arr = new Array(9);

function zero() {
var id = Math.floor(Math.random() * 9);
arr[id] ? zero() : move(id, 'zero');
}

function checkEnd(){
    if(arr[0] == 'zero' && arr[1] == 'zero' && arr[2] == 'zero' || arr[0] == 'player' && arr[1] == 'player' && arr[2] == 'player') return  true;
    if(arr[3] == 'zero' && arr[4] == 'zero' && arr[5] == 'zero' || arr[3] == 'player' && arr[4] == 'player' && arr[5] == 'player') return  true;
    if(arr[6] == 'zero' && arr[7] == 'zero' && arr[8] == 'zero' || arr[6] == 'player' && arr[7] == 'player' && arr[8] == 'player') return  true;
    if(arr[0] == 'zero' && arr[3] == 'zero' && arr[6] == 'zero' || arr[0] == 'player' && arr[3] == 'player' && arr[6] == 'player') return  true;
    if(arr[1] == 'zero' && arr[4] == 'zero' && arr[7] == 'zero' || arr[1] == 'player' && arr[4] == 'player' && arr[7] == 'player') return  true;
    if(arr[2] == 'zero' && arr[5] == 'zero' && arr[8] == 'zero' || arr[2] == 'player' && arr[5] == 'player' && arr[8] == 'player') return  true;
    if(arr[0] == 'zero' && arr[4] == 'zero' && arr[8] == 'zero' || arr[0] == 'player' && arr[4] == 'player' && arr[8] == 'player') return  true;
    if(arr[2] == 'zero' && arr[4] == 'zero' && arr[6] == 'zero' || arr[2] == 'player' && arr[4] == 'player' && arr[6] == 'player') return  true;
    if(arr[0] && arr[1] && arr[2] && arr[3] && arr[4] && arr[5] && arr[6] && arr[7] && arr[8]) return true;
}

function move(id, role){
    if(arr[id]) return false;
    arr[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ? (role == 'player') ? zero(): null : winner();
}

function creatBtn(){
    var btn = document.createElement("BUTTON");
    var txt = document.createTextNode("Играть снова");
    btn.appendChild(txt);
    document.body.appendChild(btn);
    btn.onclick = function(){
        location.reload();
    }
}

function winner(){
    if((arr[0] == 'zero' && arr[1] == 'zero' && arr[2] == 'zero') || (arr[3] == 'zero' && arr[4] == 'zero' && arr[5] == 'zero')
    || (arr[6] == 'zero' && arr[7] == 'zero' && arr[8] == 'zero') || (arr[0] == 'zero' && arr[3] == 'zero' && arr[6] == 'zero') 
    || (arr[1] == 'zero' && arr[4] == 'zero' && arr[7] == 'zero') || (arr[2] == 'zero' && arr[5] == 'zero' && arr[8] == 'zero')
    || (arr[0] == 'zero' && arr[4] == 'zero' && arr[8] == 'zero') || (arr[2] == 'zero' && arr[4] == 'zero' && arr[6] == 'zero'))
    {
        document.getElementById('result').innerHTML = '<h2> Игра окончена! <br> Победу одержал искусственный интеллект </h2>';
        creatBtn();
    }
    else if((arr[0] == 'player' && arr[1] == 'player' && arr[2] == 'player') || (arr[3] == 'player' && arr[4] == 'player' && arr[5] == 'player')
    || (arr[6] == 'player' && arr[7] == 'player' && arr[8] == 'player') || (arr[0] == 'player' && arr[3] == 'player' && arr[6] == 'player') 
    || (arr[1] == 'player' && arr[4] == 'player' && arr[7] == 'player') || (arr[2] == 'player' && arr[5] == 'player' && arr[8] == 'player')
    || (arr[0] == 'player' && arr[4] == 'player' && arr[8] == 'player') || (arr[2] == 'player' && arr[4] == 'player' && arr[6] == 'player'))
    {
        document.getElementById('result').innerHTML = '<h2> Игра окончена! <br> Вы победили! </h2>';
        creatBtn();
    }
    else{
        document.getElementById('result').innerHTML = '<h2> Игра окончена! <br> Ничья! </h2>';
        creatBtn();
    }
}
