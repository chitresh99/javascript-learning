//main function

function cookie(callback){
    console.log('cookies are ready to bake');

    setTimeout(()=>{
      console.log('putting the cookies in oven');

      callback();
    },2000)
}

function cookiesready(){
    console.log('cookies are ready');
}

cookie(cookiesready);