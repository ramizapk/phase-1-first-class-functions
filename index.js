function receivesAFunction(thing){
    return thing();
}

function returnsANamedFunction(a){
    return function a(){};
}

function returnsAnAnonymousFunction(){
    return function(){

    };
}