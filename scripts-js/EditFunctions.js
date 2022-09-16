const inputText = document.getElementsByClassName('content')[0];
const palette=document.getElementsByClassName('palette')[0];
// function editText(className)
// {
//     inputText.classList.toggle(className);
// }

function editText(styleName,styleValue)
{
    if(eval(`inputText.style.${styleName}=='${styleValue}'`))
    eval(`inputText.style.${styleName}=''`);
    else
    eval(`inputText.style.${styleName}='${styleValue}'`);


}

function showPalette(){
    palette.classList.toggle('visible');
}