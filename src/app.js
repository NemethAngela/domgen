/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-02-16
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const ul = document.querySelector('#lista');

const gyumolcsok = [
   
    'szilva', 
    'alma', 
    'körte', 
    'barack',
    'eper',
    'banán'];   //lista elem generálása

gyumolcsok.forEach( (gyumolcs) => {     //ciklus törzse a zárójelben, függvényt vár a forEach, lambda a function helyett a zárójelneb, mert uaz
    var li = document.createElement('li');
    li.textContent = gyumolcs;
    ul.append(li);  
} );   
    

// li elem generálása


