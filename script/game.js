//previous declaration of variable and function
var key_index;

function getKeyIndex(temp){
    //console.log("Pressed : "+temp);
    key_index = temp;
} 

//#####


//1. KeyPress Change Color
document.addEventListener('keydown',PressColor = (event) =>{
    var index;
    var keyName = event.key;
    //const keyList = ['Home','ArrowUp','PageUp','ArrowLeft','Clear','ArrowRight','End','ArrowDown','PageDown'];
    const keyList = ['7','8','9','4','5','6','1','2','3','Home','ArrowUp','PageUp','ArrowLeft','Clear','ArrowRight','End','ArrowDown','PageDown'];
    var divSelect = document.getElementsByClassName("gameCanvas")[0].getElementsByTagName('div');
    if(keyList.includes(keyName)==true){
       switch(keyName){
            case '7':
                divSelect[0].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[0].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 0;
                getKeyIndex(index);
                break;

            case 'Home':
                divSelect[0].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[0].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 0;
                getKeyIndex(index);
                break;
                
            case '8':
                divSelect[1].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[1].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 1;
                getKeyIndex(index);
                break;

            case 'ArrowUp':
                divSelect[1].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[1].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 1;
                getKeyIndex(index);
                break;

            case '9':
                divSelect[2].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[2].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 2;
                getKeyIndex(index);
                break;

            case 'PageUp':
                divSelect[2].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[2].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 2;
                getKeyIndex(index);
                break;

            case '4':
                divSelect[3].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[3].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 3;
                getKeyIndex(index);
                break;

            case 'ArrowLeft':
                divSelect[3].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[3].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 3;
                getKeyIndex(index);
                break;

            case '5':
                divSelect[4].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[4].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 4;
                getKeyIndex(index);
                break;


            case 'Clear':
                divSelect[4].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[4].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 4;
                getKeyIndex(index);
                break;

            case '6':
                divSelect[5].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[5].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 5;
                getKeyIndex(index);
                break;

            case 'ArrowRight':
                divSelect[5].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[5].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 5;
                getKeyIndex(index);
                break;

            case '1':
                divSelect[6].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[6].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 6;
                getKeyIndex(index);
                break;

            case 'End':
                divSelect[6].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[6].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 6;
                getKeyIndex(index);
                break;

            case '2':
                divSelect[7].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[7].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 7;
                getKeyIndex(index);
                break;

            case 'ArrowDown':
                divSelect[7].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[7].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 7;
                getKeyIndex(index);
                break;

            case '3':
                divSelect[8].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[8].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 8;
                getKeyIndex(index);
                break;

            case 'PageDown':
                divSelect[8].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[8].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 8;
                getKeyIndex(index);
                break;
        }
    }
},true);

//2. Function for Starting Screen
function mousedown(){
    var target = document.getElementsByClassName('startScreen')[0];
    target.style.display = "none";

    instant_circle();

    /*
    for (let i = 0; i < 9; i++) {
        document.getElementById('gameCanvas').getElementsByTagName('i').item(i).style.display = "block";
    }*/
}


//3. Random Display of circle (Display for 2 secs)
function instant_circle(){

    var cnt=0;
    //for(i=0;i<9;i++){

    //}

    /*
    setTimeout(function(){
        document.getElementById('gameCanvas').getElementsByTagName('i').item(randomVal).style.display = "none";
    },1500);*/
    
    var myVar  = setInterval(instant_circle, 1200);

    function instant_circle(){
        cnt+=1;
        var randomVal = Math.floor(Math.random() * 9);
        console.log(randomVal); //print index
        document.getElementById('gameCanvas').getElementsByTagName('i').item(randomVal).style.display = "block";
        count_points(randomVal); //add score
        setTimeout(function(){
            document.getElementById('gameCanvas').getElementsByTagName('i').item(randomVal).style.display = "none";
        },1000);
        //temporarily till ##### 10 loops
        if(cnt==10){
            myStopFunction();
        }
    }

    function myStopFunction(){
        clearInterval(myVar);
        //100 is just demo number
        window.alert("Your Score : "+count_points(50));
    }
}

var points=0;

//increase points
function count_points(circle_index){
        

    //var elem = document.getElementById("gameCanvas").getElementsByTagName("div").item(circle_index);
    //var elem = document.getElementsByTagName("div")[circle_index];

    //var theCSSprop = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    //var divSelect = document.getElementsByClassName("gameCanvas")[0].getElementsByTagName('div');
    //var divSelect = document.getElementById("gameCanvas").getElementsByTagName('div');
    //divSelect[2].style.backgroundColor = "rgb(0,128,0,0.3)";
    //console.log(divSelect[circle_index].style.backgroundColor);
    //console.log(circle_index);
    
    //color of game Canvas
    /*if(theCSSprop == "rgb(205, 233, 179)"){
        console.log("Points...");
        points+=1;
    }*/

    
    console.log("Key Index : "+key_index);

    if(key_index == circle_index){
        console.log("Points...");
        points+=1;
    }

    //final value
    return points;
}





