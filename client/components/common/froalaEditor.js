import React, { forwardRef } from 'react'

import FroalaEditorComponent from 'react-froala-wysiwyg'

import 'froala-editor/js/plugins.pkgd.min'

const FROALA_KEY = ''

const FroalaEditor = (props, ref) => {
  const csrfToken = document.querySelector('[name="csrf-token"]').content
  const {
    html,
    onChange,
    editorConfiguration,
    className,
    setFroalaParsedHtml,
    customConfig,
    additionalKeydownChecks,
    focusOnInitialize = false
  } = props

  let toolbarButtons = {
    moreText: {
      buttons: [
        'bold',
        'italic',
        'underline',
        '|',
        'textColor',
        'backgroundColor',
        'inlineClass',
        'clearFormatting',
      ],
      buttonsVisible: 3,
    },
  }

  const defaultEditorConfiguration = {
    key: FROALA_KEY,
    placeholderText: 'Add text here...',
    tableResizerOffset: 10,
    tableResizingLimit: 50,
    attribution: false,
    charCounterCount: false,
    requestWithCORS: true,
    useClasses: false,
    emoticonsUseImage: false,
    toolbarButtons,
    paragraphFormat: {
      N: 'Normal',
      H2: 'Heading 2',
      H3: 'Heading 3',
      H4: 'Heading 4',
      PRE: 'Code',
    },
    requestHeaders: {
      'X-CSRF-TOKEN': csrfToken,
    },
    fontFamily: {
      'Arial,sans-serif': 'Arial',
      'Georgia,serif': 'Georgia',
      'Inter,sans-serif': 'Inter',
      'Impact,sans-serif': 'Impact',
      'Tahoma,sans-serif': 'Tahoma',
      'Times New Roman,serif': 'Times New Roman',
      'Verdana,sans-serif': 'Verdana',
    },
    fontFamilySelection: true,

    entities: '',
    linkEditButtons: ['linkOpen', 'linkEdit', 'linkRemove'],
    events: {
      async initialized() {
        // This is a workaround based on this open PR on Froala
        // "Cannot call events inside initialized callback Froala 3.0.5"
        // https://github.com/froala/react-froala-wysiwyg/issues/198
        await new Promise(resolve => setTimeout(resolve, 1))

        const editor = this

        setFroalaParsedHtml && setFroalaParsedHtml(editor.html.get())

        if (focusOnInitialize) {
          editor.events.focus()
        }

        editor.events.on(
          'keydown',
          (event) => {
            if (_.isFunction(additionalKeydownChecks)) {
              additionalKeydownChecks(event, editor)
            }

            return true
          },
          true
        )
      },
      contentChanged() {
        const editor = this

        const froalaEditorHtml = editor.html

        // Wrap text into paragraphs (<p></p>)
        // https://froala.com/wysiwyg-editor/docs/methods#html.wrap
        froalaEditorHtml.wrap(false, false, false, false, true)

        setFroalaParsedHtml && setFroalaParsedHtml(froalaEditorHtml.get())
      },
    },
  }

  return (
    <div className={`${className || 'FroalaEditor'}`}>
      <FroalaEditorComponent
        ref={ref}
        model={html}
        config={{ ...defaultEditorConfiguration, ...editorConfiguration, ...customConfig }}
        onModelChange={onChange}
      />
    </div>
  )
}

export default forwardRef(FroalaEditor)
