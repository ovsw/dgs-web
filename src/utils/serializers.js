const imageUrl = require('./imageUrl')
const getYouTubeID = require('get-youtube-id');


// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
module.exports = {
  types: {
    authorReference: ({node}) => `[${node.name}](/authors/${node.slug.current})`,
    code: ({node}) =>
      '```' + node.language + '\n' + node.code + '\n```',
    mainImage: ({node}) => `![${node.alt}](${imageUrl(node).width(600).url()})`,
    iframeEmbed: ({node}) => node.code,
    youtube: (({node}) =>  {
      const youtubeId = getYouTubeID(node.url)
      return (`<div class="videoOuterWrapper"><div class="videoWrapper"><iframe width="560" height="349" src="https://www.youtube.com/embed/${youtubeId}"  frameborder="0" allowfullscreen></iframe></div></div>`)
    })
  }
}
