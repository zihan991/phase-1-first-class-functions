function spy(){

}

function receivesAFunction (spy){
 return spy()
}

function returnsANamedFunction(){
    let omega = function (){
     }

    return omega 
}

function returnsAnAnonymousFunction(){
    
    return (function(){

    } )
}