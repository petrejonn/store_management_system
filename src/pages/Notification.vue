<template>
  <q-page class="bg-prim">
    <div class="q-pa-md" />
    <div class="q-pa-md">
      <div class="row justify-center">
        <div class="col-10">
          <q-card
            class="bg-secondary text-white"
            flat
          >
            <q-card-section>
              <q-list>
                <div
                  v-for="notification in notificationsGetter"
                  :key="notification.id"
                >
                  <q-item>
                    <q-item-section>
                      <q-item-label>{{ singleItemGetter(notification.item_id).name }}</q-item-label>
                      <q-item-label
                        caption
                        lines="2"
                        class="text-grey-5"
                      >
                        {{ notification.detail }}. remainning quantity is <q-badge
                          color="accent"
                          :label="notification.qty_remaining "
                        />
                      </q-item-label>
                    </q-item-section>

                    <q-item-section
                      side
                      top
                    >
                      <q-item-label
                        class="text-green"
                        caption
                      >
                        {{ notification.date_time }}
                      </q-item-label>
                    <!-- <q-badge
                      color="accent"
                      label="10k"
                      class="q-mt-sm"
                    /> -->
                    </q-item-section>
                  </q-item>

                  <q-separator
                    spaced
                    inset
                  />
                </div>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: { ...mapGetters('storm', ['notificationsGetter', 'singleItemGetter']) }
}
</script>
