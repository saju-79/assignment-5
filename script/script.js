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




