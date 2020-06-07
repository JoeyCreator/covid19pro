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
    <div class="lg:max-w-5xl mx-auto md:px-4 p-4">
      <h1 class="text-4xl font-bold">Canada COVID-19 Tracker</h1>
      <h4 class="text-xs">
        Source:
        <a
          class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
          target="_blank"
          href="https://www.canada.ca/fr/sante-canada.html"
        >Canada Deptartment of Health</a> &middot; Last updated 6/05/2020 3:30 p.m.
      </h4>
    </div>
    <div class="mt-10 p-4 bg-red-600 rounded-lg shadow-md text-left">
      <strong>
        <i class="fas fa-exclamation-triangle pr-1"></i> Attention
      </strong>
      <p class="mt-1">
        For the most up to date information regarding COVID-19 in Canada, please consult
        <a
          class="border-b border-dotted"
          href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
        >World Health Organization</a>. This site should not be used for life saving information - instead, rather, a source for numbers and statistics.
      </p>
    </div>
    <VideoOnDemand></VideoOnDemand>
    <iframe
      src="https://experience.arcgis.com/experience/4ab8757241cc4d3fab81c8f86a501ce9"
      height="550"
      width="100%"
    ></iframe>
    <div class="pb-4">
      <h4 class="text-xs">
        Developed by Joey Cadieux &middot;
        <a
          class="text-blue-600"
          href="mailto:joey@tech-center.com"
        >Contact Me</a> &middot;
        <a class="text-blue-600" href="https://forms.gle/oef32kh8biei9h8W6">Found an issue?</a>
      </h4>
      <FooterPage></FooterPage>
    </div>
  </main>
</template>

<script>
import FooterPage from "../components/FooterPage";
import VideoOnDemand from "../components/VideoOnDemand";
import CountyOverview from "../views/CountyOverview.vue";

export default {
  name: "Home",
  components: {
    FooterPage,
    VideoOnDemand,
    CountyOverview
  }
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>