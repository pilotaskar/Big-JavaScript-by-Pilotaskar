
//<!-- 1. What JavaScript can do?  -->
// 7. JavaScript Code Blocks
function changeText(){
    document.getElementById('change-text').style.display = 'none';
    document.getElementById('first-p').innerHTML = 'If you also want to learn JavaScript you can follow me or you can also make big challenges like mine. So do everything for learning. Jump, cry, struggle but learn anyway. And give all energies to learn and practice. Only like this way you can be master of coding... ';
}

// 7. JavaScript Code Blocks
// 3. JavaScript can change Style
function changeStyle(){
    document.getElementById('first-p').style.backgroundColor = 'black';
    document.getElementById('first-p').style.color = 'white';
    document.getElementById('first-p').style.marginBottom = '10px';
    document.getElementById('change-style').style.display = 'none';
}

// 7. JavaScript Code Blocks
// 4. JavaScript can hide HTML elements.
function hideText(){
    document.getElementById('first-p').style.display = 'none';
    document.getElementById('hide-text').style.display = 'none';
    document.getElementById('change-style').style.display = 'none';
    document.getElementById('change-text').style.display = 'none';

}

// 7. JavaScript Code Blocks
// 5.JavaScript can show elements.
function addText(){
    document.getElementById('none-p').style.display = 'block';
    document.getElementById('add-text').style.display = 'none';


}

// 8.When to use Javascript const?
const price1 = 589;
const price2 = 678;
let total = price1 + price2;
document.getElementById('price1').innerHTML = '$'+price1 + '(price1 with const)';
document.getElementById('price2').innerHTML = '$'+price2 + '(price2 with const)';

document.getElementById('total').innerHTML = 'Total:'+'$'+total + '  with 40% discount ';
