// const path = require("path")

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   }

//   // Create blog post pages.
//   const posts = result.data.allMdx.edges
//   const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

//   // you'll call `createPage` for each result
//   posts.forEach(({ node }, index) => {
//     const thisPath = node.frontmatter.path
//     createPage({
//       // This is the slug you created before
//       // (or `node.frontmatter.slug`)
//       path: thisPath,
//       // This component will wrap our MDX content
//       component: path.resolve(`./src/templates/template.js`),
//       // You can use the values in this context in
//       // our page layout component
//       context: {  },
//     })
//   })
// }
