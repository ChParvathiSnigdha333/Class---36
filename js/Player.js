class Player{
    constructor(){}

    getCount(){
        var playerCountref = database.ref('playerCount')
        //Anornyms function
        playerCountref.on("value",function(data){
            playerCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(name){
       var playerIndex = "Player"+ playerCount;
       database.ref(playerIndex).set({
           name : name
       })  
    }
}