<template>
  <div>
    <header class="header">
        <g-link :to="{ name: 'home' }">
          <g-image alt="Example image" src="~/title.png" class="title-img" />
        </g-link>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
        <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
      </nav>
    </header>
    <main class="layout">
      <slot/>
    </main>
    <footer class="footer">
    </footer>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  background-color: #333333;
}

.header a {
  color: white;
}

.nav__link {
  margin-left: 20px;
}

.title-img {
  width: 200px;
}
</style>
