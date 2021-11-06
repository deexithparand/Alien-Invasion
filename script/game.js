//previous declaration of variable and function
var key_index;

//avoid keypress before mousedown
var avoid_keypress = true;

function getKeyIndex(temp){
    //console.log("Pressed : "+temp);
    key_index = temp;
} 

function audio_trigger(){
    var audio = new Audio('C:/Users/deexi/OneDrive/Desktop/WebDev/Sun/Audio/laser.mp3');
    audio.play();
}

function audio_triggerExp(){
    var audio = new Audio('C:/Users/deexi/OneDrive/Desktop/WebDev/Sun/Audio/explosion.mp3');
    audio.play();
}

//#####


//1. KeyPress Change Color
document.addEventListener('keydown',PressColor = (event) =>{
    var index;
    var keyName = event.key;
    //const keyList = ['Home','ArrowUp','PageUp','ArrowLeft','Clear','ArrowRight','End','ArrowDown','PageDown'];
    const keyList = ['7','8','9','4','5','6','1','2','3','Home','ArrowUp','PageUp','ArrowLeft','Clear','ArrowRight','End','ArrowDown','PageDown'];
    var divSelect = document.getElementsByClassName("gameCanvas")[0].getElementsByTagName('div');
    if(keyList.includes(keyName)==true && avoid_keypress==false){
       switch(keyName){
            case '7':
                audio_trigger();
                divSelect[0].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[0].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 0;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'Home':
                audio_trigger();
                divSelect[0].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[0].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 0;
                getKeyIndex(index);
                count_points(); //add points
                break;
                
            case '8':
                audio_trigger();
                divSelect[1].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[1].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 1;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'ArrowUp':
                audio_trigger();
                divSelect[1].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[1].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 1;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case '9':
                audio_trigger();
                divSelect[2].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[2].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 2;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'PageUp':
                audio_trigger();
                divSelect[2].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[2].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 2;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case '4':
                audio_trigger();
                divSelect[3].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[3].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 3;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'ArrowLeft':
                audio_trigger();
                divSelect[3].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[3].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 3;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case '5':
                audio_trigger();
                divSelect[4].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[4].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 4;
                getKeyIndex(index);
                count_points(); //add points
                break;


            case 'Clear':
                audio_trigger();
                divSelect[4].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[4].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 4;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case '6':
                audio_trigger();
                divSelect[5].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[5].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 5;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'ArrowRight':
                audio_trigger();
                divSelect[5].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[5].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 5;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case '1':
                audio_trigger();
                divSelect[6].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[6].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 6;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'End':
                audio_trigger();
                divSelect[6].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[6].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 6;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case '2':
                audio_trigger();
                divSelect[7].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[7].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 7;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'ArrowDown':
                audio_trigger();
                divSelect[7].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[7].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 7;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case '3':
                audio_trigger();
                divSelect[8].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[8].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 8;
                getKeyIndex(index);
                count_points(); //add points
                break;

            case 'PageDown':
                audio_trigger();
                divSelect[8].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[8].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                index = 8;
                getKeyIndex(index);
                count_points(); //add points
                break;
        }
    }
},true);

//2. Function for Starting Screen
function mousedown(){
    var target = document.getElementsByClassName('startScreen')[0];
    target.style.display = "none";

    //once screen starts DISPLAY CIRCLE RANDOMLY
    instant_circle_call();
    //avoid keypress before mousedown
    avoid_keypress = false;
}


//3. Random Display of circle (Display for 2 secs)
function instant_circle_call(){
    var cnt=0;
    
    var myVar  = setInterval(instant_circle, 800);

    function instant_circle(){
        cnt+=1;
        var randomVal = Math.floor(Math.random() * 9);
        console.log(randomVal); //print index
        document.getElementById('gameCanvas').getElementsByTagName('i').item(randomVal).style.display = "block";
        setTimeout(function(){
            document.getElementById('gameCanvas').getElementsByTagName('i').item(randomVal).style.display = "none";
        },500);
        //temporarily till ##### 10 loops
        if(cnt==10){
            myStopFunction();
        }
    }

    function myStopFunction(){
        clearInterval(myVar);
        //10 loops is just for demo
        display_endScreen();
        window.alert("Your Score : "+count_points());
    }
}

//global declaration of  points
var points=0; //avoid declartion to 0 on call function everytime

//increase points
function count_points(){
    console.log("Key Index : "+key_index);
    var target = document.getElementById('gameCanvas').getElementsByTagName('i').item(key_index);

    //everytime you press the button if there is circle displayed in the index passed
    //point count increases
    if(target.style.display == "block"){
        audio_triggerExp();
        console.log("Points...");
        points+=1;
    }

    //final value
    return points;
}

function display_endScreen(){
    document.getElementsByClassName('endScreen')[0].style.visibility = "visible";
    document.getElementsByClassName('endScreen')[0].getElementsByTagName('i')[0].style.visibility = "visible";
}

function replayMousedown(){
    location.reload();
}







