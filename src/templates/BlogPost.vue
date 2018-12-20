<template>
  <Layout>
    <div slot="main">
      <h1>{{ $page.blogPost.title }}</h1>
      <dl>
        <dt>{{ $page.blogPost.date }}</dt><dd></dd>
      </dl>
      <img :src="$page.blogPost.fields.image"/>
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
    }
  }
}
</page-query>

<script>
  export default {}
</script>

<style scoped>
  h1 {
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