import React  from 'react'

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'

const FroalaRichTextView = ({ record, recordType, richTextKey, className }) => {
  const containerId = `${recordType}-${record.id}-${richTextKey}-rich-text-view`
  const richTextHtml = record[richTextKey]

  // portals are rendered after the component has mounted so that we can find the user mentions with data-user-ids in the DOM
  return (
    <div id={containerId} className={className}>
      <FroalaEditorView model={richTextHtml} />
    </div>
  )
}

export default FroalaRichTextView
