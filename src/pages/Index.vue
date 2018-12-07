<template>
  <Layout>
    <div slot="main">
      <h1>Blog Posts</h1>
      <div v-for = "item in $page.allPost.edges">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <dl>
          <dt>post date</dt><dd>post tag</dd>
        </dl>
        <img src="" alt="post image">
        <p>description</p>
      </div>
    </div>

    <div slot="side">
      <h1>Blog Posts</h1>
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

<style>
  h2 {
    border-bottom: inset 10px #01bbdd;
  }

  dt{
    float: left;
  }

  dd{
    margin-left: 80px;
  }
</style>