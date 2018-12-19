<template>
  <Layout>
    <div slot="main">
      <h1>Blog Posts</h1>
      <div v-for="item in $page.allBlogPost.edges">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <dl>
          <dt>{{ item.node.date }}</dt><dd>post tag</dd>
        </dl>
        <img src="../img/frozen.jpg" alt="post image">
        <p>description</p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query posts {
  allBlogPost {
    edges {
      node {
        path
        title
        content
        date(format:"YYYY年MM月DD日 HH:mm:ss")
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
    margin-left: 200px;
  }

  img {
    width: 85%;
  }
</style>