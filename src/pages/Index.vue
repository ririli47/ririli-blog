<template>
  <Layout>
    <div slot="main">
      <h1>Blog Posts</h1>
      <div v-for="item in $page.allPost.edges" :key="item.path">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <dl>
          <dt>post date</dt><dd>post tag</dd>
        </dl>
        <img src="../frozen.jpg" alt="post image">
        <p>description</p>
      </div>
    </div>

    <div slot="side">
      <h1>About me</h1>
      <img src="../usapi.png" alt="usapi">
      <h2>Naoya Fukuhara</h2>
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
    margin-right: 10%;
  }

  dt{
    float: left;
  }

  dd{
    margin-left: 80px;
  }

  img {
    width: 85%;
  }
</style>