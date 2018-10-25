

function guessLetter(){
    let dictionnary=["BONJOUR", "BECODE", "CODER", "CHARLEROI", 
    "ANTICONSTITUTIONNELLEMENT", "GAMING", "ORDINATEUR", "DEVELOPPER","GENK","LIEGE", "BRUXELLES","TABLETTE", "BOOTSTRAP"];
    let mysteryWord=mysteryFromDictionnary(dictionnary);
    console.log(mysteryWord);
    let guessWord=initGuessWord(mysteryWord);
    let userInput="";
    let findLetter=false;
    while(!(isSame(mysteryWord,guessWord))){

        do{
            userInput=(prompt("mot mystère:\n"+guessWord.join("")+"\n\nEntrez une lettre:")).toUpperCase();
        }while(userInput==""||userInput.length!=1||!(isUpperLetter(userInput)));

        findLetter=false;
        
        for(let i=0;i<mysteryWord.length;i++){
            if(userInput===mysteryWord[i]){
                guessWord[i]=mysteryWord[i];
                findLetter=true;
            }
        }

        if(findLetter){
            alert("bravo vous avez trouvé la lettre \""+userInput+"\"!");
        }
        else{
            alert("dommage..");
        }

    }
    alert("Bravo vous avez trouvé le mot mystère qui était \""+guessWord.join("")+"\"!!\n");
} 

function isSame(tab1,tab2){
    let same=false;
    if(tab1.length===tab2.length){
        same=true;
        for(let i=0;i<tab1.length;i++){
            if(tab1[i]!=tab2[i])
            {
                same=false;
            }
        }
    }
    return same;
}

function isUpperLetter(input){
    if(input.length==1){
        if((input.charCodeAt(0)>=65)&&(input.charCodeAt(0)<=90)){
            return true;
        }
    }
    return false;
}

function mysteryFromDictionnary(dictionnary){
    let word=dictionnary[Math.floor((Math.random()*dictionnary.length))];
    word.split();
    return word;
}

function initGuessWord(word){
    let guessWord=[];
    for(let i=0;i<word.length;i++){
        guessWord.push(". ");
    }
    console.log(guessWord);
    return guessWord;
}