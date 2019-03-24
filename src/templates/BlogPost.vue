<template>
  <Layout>
    <div slot="main" class="post">
      <h1>{{ $page.blogPost.title }}</h1>
      <div class="border"></div>
      <dl>
        <dt>{{ $page.blogPost.date }}</dt><dd></dd>
      </dl>
      <img :src="$page.blogPost.fields.image.src"/>
      <div class="content" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<page-query>
query MarkdownPost ($path: String!) {
  blogPost (path: $path) {
    title
    date (format: "YYYY年MM月DD日 HH:mm:ss")
    content
    fields {
      image
      tags
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

  .border {
    height: 15px;
    margin-right: 10%;
    background: linear-gradient(135deg, #01bbdd, #ffffff);
  }

  h1 {
    margin-bottom: 0%;
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