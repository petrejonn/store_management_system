<template>
  <q-layout view="hHh lpR fFf">
    <top-bar />
    <q-page-container>
      <router-view />
      <q-page-sticky position="top-left">
        <div
          class="bg-secondary window-height"
          style="max-width: 60px;"
        >
          <q-list separator>
            <q-item
              clickable
              v-ripple
              :active="link === 'items'"
              @click="link = 'items'"
              active-class="bg-secondary"
              class="text-red-13"
              to="/"
            >
              <q-item-section avatar>
                <q-icon name="shopping_basket" />
              </q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'notifications'"
              @click="link = 'notifications'"
              active-class="bg-secondary"
              class="text-green"
              to="/notifications"
            >
              <q-item-section avatar>
                <q-icon name="notifications" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>
<style>
    .bg-prim{
        background-color: #212529;
    }
    .bg-prim-trans{
        background-color: rgba(27, 35, 66, .5);
    }
</style>

<script>
export default {
  data () {
    return {
      link: 'items'
    }
  }
}
</script>
