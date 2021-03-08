const editor = document.querySelector('#editor')
const btnBold = document.querySelector('#btn-bold')

function getSelectionIndexes() {
  const selection = document.getSelection()

  if (selection.isCollapsed) {
    return null
  }

  const { anchorOffset: indexStart, focusOffset: indexEnd } = selection

  console.log('selection', selection)

  return indexStart < indexEnd ? [indexStart, indexEnd] : [indexEnd, indexStart]
}

btnBold.addEventListener('click', function () {
  const indexes = getSelectionIndexes()

  if (indexes) {
    const editorContent = editor.innerHTML

    const newContent = [
      editorContent.slice(0, indexes[0]),
      '<b>',
      editorContent.slice(indexes[0], indexes[1]),
      '</b>',
      editorContent.slice(indexes[1]),
    ].join('')

    editor.innerHTML = newContent
  }
})
