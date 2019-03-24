<template>
  <Layout>
    <div slot="main">
      <h1>Blog Posts</h1>
      <div v-for="item in $page.allBlogPost.edges" :key="item.path" class="post">
        <h2>
          <g-link :to="item.node.path">{{ item.node.title }}</g-link>
        </h2>
        <div class="border"></div>
        <dl>
          <dt>{{ item.node.date }}</dt><dd>{{ item.node.fields.tags }}</dd>
        </dl>
        <g-link :to="item.node.path" class="continue-link">
          <g-image :src = "item.node.fields.image.src" />
        </g-link>
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
  @keyframes RightToLeft {
    0% {
      opacity: 0;/* 透明 */
      transform: translateX(50px);/* X軸方向に50px */
    }
    100% {
      opacity: 1;/* 不透明 */
      transform: translateX(0);
    }
  }

  .post {
    animation-duration: 2s;/* アニメーション時間 */
    animation-name: RightToLeft;/* アニメーション名 */
    /*animation-iteration-count: infinite;/* アニメーションの繰り返し（無限）*/
  }

  .post {
    margin-bottom: 10%;
    margin-right: 10%; 
  }

  .border {
    height: 20px;
    background: linear-gradient(135deg, #01bbdd, #ffffff);
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