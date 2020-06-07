<template>
  <main>
    <div class="alert alert-dismissible alert-warning">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <h4 class="alert-heading">Information about coronavirus (COVID-19)</h4>
      <p class="mb-0">
        Coronavirus disease (COVID-19) information for Canadians including links to disease updates, travel advice, how to be prepared, symptoms, prevention, risk, ...
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019?gclid=CjwKCAjw2uf2BRBpEiwA31VZjzFSOth73wkl_kyrk13n_bVcnI-NTLe5VxODMUwpj3rA6yldxgHjBhoCkXoQAvD_BwE"
          class="alert-link"
        >World Health Organization</a>.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: "SiteAlerts"
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>