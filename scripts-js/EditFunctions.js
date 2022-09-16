const inputText = document.getElementsByClassName('content')[0];

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