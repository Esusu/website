const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000

const path = require('path')

const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')


const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()


const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24
})


const cachedRender = (req, res, pagePath, queryParams) => {
  const key = `${req.url}`

  if (!dev && ssrCache.has(key)) {
    res.append('X-Cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      ssrCache.set(key, html)
      res.append('X-Cache', 'MISS')
      res.send(html)
    })
    .catch((error) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

app.prepare()
.then(() => {
  const server = express()

  server.disable('x-powered-by')


  server.get('/', (req, res) => {
    cachedRender(req, res, '/')
  })


  server.get('/stories', (req, res) => {
    cachedRender(req, res, '/stories')
  })

  server.get('/team', (req, res) => {
    cachedRender(req, res, '/team')
  })  
  
  server.get('/stories', (req, res) => {
    cachedRender(req, res, '/stories')
  })  
  
  server.get('/about', (req, res) => {
    cachedRender(req, res, '/about')
  })

  server.get('/faqs', (req, res) => {
    cachedRender(req, res, '/faqs')
  })  
  
  server.get('/legal', (req, res) => {
    cachedRender(req, res, '/legal')
  })

  server.get('/story/:id', (req, res) => {
    const queryParams = { id: req.params.id }
    cachedRender(req, res, '/story', queryParams)
  })

  server.get('/sw.js', (req, res) => {
    res.sendFile(path.resolve('./.next/sw.js'))
  })

  server.use('/static', express.static('./static', {
    maxage: '48h',
    index: false,
    redirect: false
  }))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log(`> RSeady on http://localhost:${PORT}`)
  })
})
.catch((err) => {
  console.error(err.stack)
  process.exit(1)
})
