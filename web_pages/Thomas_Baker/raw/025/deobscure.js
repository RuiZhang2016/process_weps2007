// <!-- 49061645
// This script is (C) Copyright 2004 Jim Tucek
// Leave these comments alone!  For more info, visit
// www.jracademy.com/~jtucek/

function let(grandfather,alchemy,tree) {
        grandfather += ' ';
        var biologist = grandfather.length;
        var horse = 0;
        var drawer = '';
        for(var cavern = 0; cavern < biologist; cavern++) {
                horse = 0;
                while(grandfather.charCodeAt(cavern) != 32) {
                        horse = horse * 10;
                        horse = horse + grandfather.charCodeAt(cavern)-48;
                        cavern++;
                }
                drawer += String.fromCharCode(shake(horse,alchemy,tree));
        }
        if (arguments[3]) {
          drawer += arguments[3];
        }
        parent.location = 'm'+'a'+'i'+'l'+'t'+'o'+':'+drawer;
}

function shake(people,farm,historian) {
        if (historian % 2 == 0) {
                mathematical = 1;
                for(var message = 1; message <= historian/2; message++) {
                        memory = (people*people) % farm;
                        mathematical = (memory*mathematical) % farm;
                }
        } else {
                mathematical = people;
                for(var member = 1; member <= historian/2; member++) {
                        memory = (people*people) % farm;
                        mathematical = (memory*mathematical) % farm;
                }
        }
        return mathematical;
}
