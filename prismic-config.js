export default {
  apiEndpoint: 'https://esusuweb.prismic.io/api/v2',
  linkResolver(doc) {
    switch(doc.type) {
      case 'post':
        return '/story/' + doc.uid
      default:
        return '/'
    }
  }
}
