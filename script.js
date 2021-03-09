const btnBold = document.querySelector('#btn-bold')
const btnItalic = document.querySelector('#btn-italic')
const btnUnderline = document.querySelector('#btn-underline')

function applyFormattingToSelection(tag) {
  const selection = document.getSelection()

  if (selection.isCollapsed) {
    console.log('nothing selected')
    return
  }

  const range = selection.getRangeAt(0)
  const newParent = document.createElement(tag)

  newParent.appendChild(range.extractContents())

  range.insertNode(newParent)
}

btnBold.addEventListener('click', () => applyFormattingToSelection('b'))
btnItalic.addEventListener('click', () => applyFormattingToSelection('i'))
btnUnderline.addEventListener('click', () => applyFormattingToSelection('u'))
