<template>
    <Layout>
        <div slot="main">
            <div v-html="$page.post.title"/>
            <div v-html="$page.post.content"/>
            <div v-html="$page.post.date"/>
        </div>
    </Layout>
</template>

<page-query>
query MarkdownPost ($path: String!) {
  post (path: $path) {
    title
    content  
    date
  }
}
</page-query>

<script>
  export default {}
</script>