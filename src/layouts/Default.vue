<template>
  <div>
    <header class="header">
      <div class="header-background">
        <div class="header-wrap">
          <g-link :to="{ name: 'home' }">
            <g-image alt="Example image" src="../../assets/img/title.png" class="title-img"/>
          </g-link>
        </div>
      </div>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">Home</g-link>
        <g-link class="nav__link" :to="{ name: 'about' }">About</g-link>
      </nav>
    </header>
    <main class="layout">
      <div class="Layout-part-main">
        <slot name="main"/>
      </div>
      <div class="Layout-part-side">
        <h1>About me</h1>
        <g-image src="../../assets/img/usapi.png" alt="usapi"/>
        <h2>Naoya Fukuhara</h2>
      </div>
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
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
}

.Layout-part-main {
  flex: 4;
}

.Layout-part-side {
  flex: 1;
}

.header {
  margin-bottom: 20px;
  height: 10%;
}

.header-background {
  background-color: #333333;
}

.header-wrap {
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.nav {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-size: 2rem;
}

.nav__link {
  text-decoration: none;
  color: #333333;
}

.nav__link:not(:first-child) {
  margin-left: 20px;
}

.nav__link:hover {
  color: #01bbdd;
}

.title-img {
  width: 200px;
}

img {
  width: 85%;
}


@media screen and (max-width:1200px){
  .title-img {
    margin-left: 20px;
  }

  .nav {
    margin-left: 20px;
    margin-right: 20px;
  }

}
</style>
