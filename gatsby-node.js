/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

// NOTE: this static data reading will get replaced by graphql
const data = require('./data.js')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const productPageTemplate = '/Users/jyotipuri/humble/shogun/hub-poc/src/templates/product-page.js'
  data.pages.forEach(async (page) => {
    const path = page.path
    const sections = page.section_ids.map(sec => data.sections.find(s => s.id === sec))

    const htmls = []
    for (let i = 0; i < sections.length;i++) {

      // NOTE: here vue templates are rendered to string
      const data = page.section_data.find(secdata => sections[i].id === secdata.section_id) || {}
      const app = new Vue({...sections[i], data})
      const html = await renderer.renderToString(app)
      htmls.push(html)
    }
    createPage({
      path,
      component: productPageTemplate,
      context: {
        htmls,
      },
    })
  })
}