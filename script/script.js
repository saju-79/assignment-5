//  body color change body 
function fullBodyColorChange(){
  const numbers = '0123456789ABCDEFGHIJKLMNOPQRST';
  let ChangeColor =' #';
  for (let i = 0; i < 6; i++) {
    ChangeColor += numbers[Math.floor(Math.random() * 12)];
  }
  return ChangeColor;
}
document.getElementById('changeColorBodyBtn').addEventListener('click' , function(){
  const bodyColor = document.getElementById('bodyColor') ;
    bodyColor.style.backgroundColor = fullBodyColorChange();
        // console.log('this color code number : ' , fullBodyColorChange())
})

// big button worke
const clickButton = document.getElementById('big-button')
clickButton.addEventListener('click' , function(){
           window.location.href = "../main.html"


});
// number cromonnoi big 
    const completedElements = document.querySelectorAll(".complete-button");
   for(let btn of completedElements){
    completedElements.addEventListener('click', function(event){
      const amount = event.target.innerText === "+" ? 1 : -1 ;
        console.log('hiiiiiiiiiii' , amount)
    })
   }
 
    // const quantityElements = document.querySelectorAll(".quantity-button");
// for (let btn of quantityElements) {
//   btn.addEventListener("click", function (event) {
//     const amount = event.target.innerText === "+" ? 1 : -1; // 1 || -1
//     const quantityEelemnt = document.getElementById("quantity");
//     const currentQuantity = parseInt(quantityEelemnt.innerText);
//     const newQuantity = Math.max(0, currentQuantity + amount);
//     quantityEelemnt.innerText = newQuantity;
//   });
// }
// clear history  deleted


document.getElementById("History-clear").addEventListener('click', function(){
     console.log('hiiiiiiiiiiii');
     document.getElementById('hidden-display').style.display = "none"
});