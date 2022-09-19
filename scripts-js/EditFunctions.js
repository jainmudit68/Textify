const inputText = document.getElementsByClassName("content")[0];
const palette = document.getElementsByClassName("palette")[0];
const highlighter = document.querySelectorAll(".menu-buttons");

//to change the font of the input to the selected font style by the user
function updateText() {
  inputText.style.fontFamily = document.getElementById("fontType").value;
}

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
function editText(styleName, styleValue) {
  if (styleName == "color") {
    palette.classList.toggle("visible");
    document.getElementsByClassName('menu-buttons-palette')[0].style.color=styleValue;
  }
  if (eval(`inputText.style.${styleName}=='${styleValue}'`)) {
    eval(`inputText.style.${styleName}=''`);
  } else {
    eval(`inputText.style.${styleName}='${styleValue}'`);
  }
}

//this is to make the palette visible/hidden on request
function showPalette() {
  palette.classList.toggle("visible");
}

highlighter.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element.id) {
      case "underline":
        element.classList.toggle("btnhighlighter");
        document.getElementById('strikethrough').classList.remove("btnhighlighter");
        break;
      case "strikethrough":
        element.classList.toggle("btnhighlighter");
        document.getElementById('underline').classList.remove("btnhighlighter");
        break;
      case "leftalignment":
        element.classList.toggle("btnhighlighter");
        document.getElementById("centeralignment").classList.remove("btnhighlighter");
        document.getElementById("rightalignment").classList.remove("btnhighlighter");
        break;
      case "centeralignment":
        element.classList.toggle("btnhighlighter");
        document.getElementById("leftalignment").classList.remove("btnhighlighter");
        document.getElementById("rightalignment").classList.remove("btnhighlighter");
        break;
      case "rightalignment":
        element.classList.toggle("btnhighlighter");
        document.getElementById("centeralignment").classList.remove("btnhighlighter");
        document.getElementById("leftalignment").classList.remove("btnhighlighter");
        break;
      default:
        element.classList.toggle("btnhighlighter");
    }
  });
});
