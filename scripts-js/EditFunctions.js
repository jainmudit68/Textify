const inputText = document.getElementsByClassName('content')[0];
const palette=document.getElementsByClassName('palette')[0];

//APPROACH: to enable the selected text formatting
/*
    let inputText;
    if(document.getSelection().toString()=='')
    {
        inputText = document.getElementsByClassName('content')[0];
    }
    else
    {
        inputText = document.getSelection();
    }
*/

//APPROACH: using 'classes' to add functionality
/* 
    function editText(className)
    {
        inputText.classList.toggle(className);
    }
*/

//APPROACH: using 'inline styling' to add functionality
// -it solved the problem of precedence in case of classes (as it updated the property in place of overriding it)
function editText(styleName,styleValue)
{
    if(eval(`inputText.style.${styleName}=='${styleValue}'`))
    {
        eval(`inputText.style.${styleName}=''`); 
    }
    else
    {
        eval(`inputText.style.${styleName}='${styleValue}'`);
    }
}

//this is to make the palette visible/hidden on request
function showPalette(){
    palette.classList.toggle('visible');
}