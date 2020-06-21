<template>
  <div class="nav">
    <ul class="nav-list">
      <li><router-link to="#">Reset Game</router-link></li>
      <li><router-link to="/referee">Refree Setup</router-link></li>
      <li><router-link to="/option">Game Options</router-link></li>
      <li><router-link to="/server">Server Preferences</router-link></li>
      <li><router-link to="/players">Players & Draws</router-link></li>
      <li><router-link to="/sudden"> Sudden death round</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "navbar"

}
</script>

<style lang="scss" scoped>
  .nav {
    margin: 0;
    padding: 0;
    background-color: orange;
    height: 30px;
    .nav-list {
      display: flex;
      text-align: center;
      flex-flow: row;
      align-items: stretch;
      li {
        flex: 1 1;
        list-style-type: none;
        border: 1px solid black;
        padding: 5px;
        a, a:hover {
          text-decoration: none;
          color: black;
          font-weight: 600;
        }
      }
    }
  }
</style>