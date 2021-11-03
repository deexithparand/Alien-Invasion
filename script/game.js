/*KeyPress Change Color*/
document.addEventListener('keydown',PressColor = (event) =>{
    var index;
    var keyName = event.key;
    const keyList = ['7','8','9','4','5','6','1','2','3'];
    var divSelect = document.getElementsByClassName("gameCanvas")[0].getElementsByTagName('div');
    if(keyList.includes(keyName)==true){
       switch(keyName){
            case '7':
                divSelect[0].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[0].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 0;
                break;
            case '8':
                divSelect[1].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[1].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 1;
                break;
            case '9':
                divSelect[2].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[2].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 2;
                break;
            case '4':
                divSelect[3].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[3].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 3;
                break;
            case '5':
                divSelect[4].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[4].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 4;
                break;
            case '6':
                divSelect[5].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[5].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 5;
                break;
            case '1':
                divSelect[6].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[6].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 6;
                break;
            case '2':
                divSelect[7].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[7].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 7;
                break;
            case '3':
                divSelect[8].style.backgroundColor = "rgb(0,128,0,0.3)";
                setTimeout(function(){ 
                    divSelect[8].style.backgroundColor = "rgb(205,233,179,0)";
                },200);
                //index = 8;
                break;
        }
    }
},true);

