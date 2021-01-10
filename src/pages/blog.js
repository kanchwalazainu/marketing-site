import React from 'react';
import { graphql } from 'gatsby';

import { SEO, StickyFooter } from 'components';
import PostSummary from 'components/blog/PostSummary';

const MAX_WIDTH_BREAKPOINT = 'md';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`All blog posts | ${siteTitle}`} />

      <StickyFooter maxWidthBreakpoint={MAX_WIDTH_BREAKPOINT} location={location}>
        {posts.map(({ node }) => (
          <PostSummary key={node.fields.slug} post={node} />
        ))}
      </StickyFooter>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/.+/blog/.+/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }

          frontmatter {
            date
            title
            description
            lastValidated
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
