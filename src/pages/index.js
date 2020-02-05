import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import FluidImage from "../components/FluidImage";
import EntryMeta from '../components/Shared/EntryMeta'


const BlogIndex = ({data}) => {

  const posts = data.wpgraphql.posts.edges;
  console.log(posts)
  return (
    <Layout>
      <SEO title="Home" />

      {posts.map(post => {
        const { postTitle, postExcerpt, slug, date } = post.node;

        const { name, avatar } = post.node.author;;

        const featuredImage = post.node.featuredImage;

        //  Array of 'term' objects
        const { terms } = post.node;

        console.log(terms)
        
        return (
          <div key={post.node.id} className={"post"}>
            <FluidImage image={featuredImage} />
            <Link to={slug}>
              <h1 dangerouslySetInnerHTML={{__html: postTitle}} />
            </Link>
            <EntryMeta name={name} avatar={avatar} date={date}/>
            <p dangerouslySetInnerHTML={{__html: postExcerpt}} />
          </div>
        )
      })}
    </Layout>

  )
}

export default BlogIndex;

// Where this this being fired?
export const AllPostQuery = graphql`
  {
    wpgraphql {
      posts {
        edges {
          node {
            id
            title
            excerpt
            date
            slug
            uri
            author {
              name
              avatar {
                url
              }
            }
            featuredImage {
              sourceUrl
              altText
            }
            terms {
              ... on WPGraphQL_Category {
                id
                name
              }
              ... on WPGraphQL_Tag {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`