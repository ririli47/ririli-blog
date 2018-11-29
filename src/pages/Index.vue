<template>
  <Layout>
    <!--<g-image alt="Example image" src="~/favicon.png" width="135" />-->
    <h1>Hello, world!</h1>
    <div>
      <h2>Blog Posts</h2>
      <div v-for="item in $page.allPost.edges">
        <g-link :to="item.node.path">{{ item.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query posts {
  allPost{
    edges {
      node {
        path
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {}
</script>

