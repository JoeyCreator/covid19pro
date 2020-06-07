<template>
  <main>
    <SiteAlerts2></SiteAlerts2>
    <strong>OurTeam page coming soon !</strong>
    <FooterPage></FooterPage>
  </main>
</template>

<script>
import OurTeam from "../views/OurTeam.vue";
import FooterPage from "../components/FooterPage";
import SiteAlerts2 from "../components/SiteAlerts2";

export default {
  name: "OurTeam",
  components: {
    OurTeam,
    FooterPage,
    SiteAlerts2
  }
};
</script>

<style scoped>
main {
  padding: 100px;
}
</style>