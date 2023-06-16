<template>
  <div class="header-account">
    <div class="account-wrapper d-flex align-center mr-4">
      <span class="mt-2">
        <svg class="avatar mt-a mb-a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.6 66.7">
          <path fill-rule="evenodd" d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"></path>
        </svg>
      </span>
      <span class="font ml-3">Sign In</span>
      <span class="font ml-3">|</span>
      <span class="font ml-3">Join</span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.header-account {
  width: 30vw;
  height: 100%;
}

.account-wrapper {
  height: 100%;
  float: right !important;
}

.avatar {
  width: 35px;
  height: 35px;
}

.font {
  color: white;
  font: 400 .9rem RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
}

@media only screen and (max-width: 600px) {
  .header-account {
    width: 50vw;
    height: 100%;
    text-align: right;
  }
  .font {
  color: white;
  font: 400 .6rem RobotoCondensed Bold,Trebuchet MS,Helvetica,Arial,sans-serif;
}
}


</style>