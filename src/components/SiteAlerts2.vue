<template>
  <main>
    <div class="alert alert-dismissible alert-danger">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <h4 class="alert-heading">Information about OurTeam
        <h1>Page</h1>
      </h4>
      <p class="mb-0">
        Anyone can be a part of our team you just have to send an email to the team-email
        <strong>team1@engineer.com</strong> and they will send you back an email as soon as possible, ...
        <a
          href="http://facebook.com/joey.cadieux1"
          class="alert-link"
        >You Can Also Contact Joey Cadieux with Facebook</a>.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "SiteAlerts2"
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>