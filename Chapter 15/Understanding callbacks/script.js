//main function

function artist(callback){
    console.log('artist wants to perform');

    //timeout
    setTimeout(()=>{
        console.log('artist performed');

        callback();

    },5000) //setting the timer
}

function artistmanager(){
    console.log('money recieved');
}

artist(artistmanager);