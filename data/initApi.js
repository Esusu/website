import Prismic from 'prismic.io'
import config from '../prismic-config'

let client = null

export const initApi = (req = null) => {
  return req 
    ? Prismic.getApi(config.apiEndpoint, { req: req }) 
    : Prismic.getApi(config.apiEndpoint)
}

