<template>
  <Layout>
    <div slot="main">
      <h1>Blog Posts</h1>
      <div v-for="item in $page.allBlogPost.edges" :key="item.path">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <dl>
          <dt>{{ item.node.date }}</dt><dd>post tag</dd>
        </dl>
        <g-image :src = "item.node.fields.image.src" />
        <p>{{ item.node.fields.description }}</p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
    allBlogPost (page: $page) {
      edges {
        node {
          _id
          title
          date (format: "YYYY年MM月DD日 HH:mm:ss")
          fields {
            description
            image
          }
          path
        }
      }
    }
  }
</page-query>

<script>
  export default {}
</script>

<style scoped>
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