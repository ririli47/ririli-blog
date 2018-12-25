<template>
  <Layout>
    <div slot="main">
      <h1>Blog Posts</h1>
      <div v-for="item in $page.allBlogPost.edges" :key="item.path" class="post">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <dl>
          <dt>{{ item.node.date }}</dt><dd>{{ item.node.fields.tags}}</dd>
        </dl>
        <g-image :src = "item.node.fields.image.src" />
        <p>{{ item.node.fields.description }}</p>
        <g-link :to="item.node.path" class="continue-link">続きを読む ></g-link>
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
            tags
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
  .post {
    margin-bottom: 10%;
    margin-right: 10%; 
  }

  h2 {
    border-bottom: inset 10px #01bbdd;
  }

  a { 
    text-decoration: none;
    color: #333333;
  }

  a:hover {
    color: #cccccc;
  }

  dt{
    float: left;
  }

  dd{
    margin-left: 200px;
  }

  img {
    width: 95%;
    height: auto;
  }

  .continue-link {
    float: right;
  }
  

</style>