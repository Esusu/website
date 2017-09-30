import Prismic from 'prismic-javascript'
import config from '../prismic-config'

let prismicClient = null


function create(req){
  return Prismic.getApi(config.apiEndpoint, { req: req })
}

export default function initApi(req) {
  if(!process.browser) {
    return create(req)
  }

  if(!prismicClient) {
    prismicClient = create(req)
  }

  return prismicClient
}

