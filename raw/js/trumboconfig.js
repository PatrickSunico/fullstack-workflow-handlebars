/* imgur parameters to upload plugin */
var uploadOptions = {
    serverPath: 'https://api.imgur.com/3/image',
    fileFieldName: 'image',
    headers: {'Authorization': 'Client-ID 9e57cb1c4791cea'},
    urlPropertyName: 'data.link'
};
//

$('textarea')
  .trumbowyg({
    btnsDef: {
      // Create a new dropdown
      image: {
        dropdown: ['insertImage', 'upload'],
        ico: 'insertImage'
      },
      link: {
          dropdown: ['createLink', 'unlink', 'noembed'],
          ico: 'link'
      }
    },
    // Redefine the button pane
    btns: ['viewHTML',
      '|', 'formatting',
      '|', 'btnGrp-semantic',
      '|', 'foreColor',
      'backColor',
      'removeformat',
      '|', 'link',
      '|', 'image',
      '|', 'btnGrp-justify',
      '|', 'btnGrp-lists',
      '|', 'horizontalRule'

    ],
    plugins: {
      upload: uploadOptions
    }

  });
