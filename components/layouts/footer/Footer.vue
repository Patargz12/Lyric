<script setup>
import FooterLogo from "~/components/layouts/footer/FooterLogo.vue";
import FooterContact from "~/components/layouts/footer/FooterContact.vue";
import FooterLinks from "~/components/layouts/footer/FooterLinks.vue";
import FooterNewsletter from "~/components/layouts/footer/FooterNewsletter.vue";
import FooterBottom from "~/components/layouts/footer/FooterBottom.vue";
</script>


<template>
  <footer class="bg-primary-500">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div class="space-y-6">
          <FooterLogo />
          <FooterContact />
        </div>
        <div class="lg:col-span-2">
          <FooterLinks />
        </div>
        <div>
          <FooterNewsletter />
        </div>
      </div>
    </div>
    <FooterBottom />
  </footer>
</template>