<template>
  <q-dialog
    v-model="showDialogue"
    persistent
    transition-show="flip-down"
    transition-hide="flip-up"
  >
    <q-card
      class="bg-prim text-white add-anim-card"
      style="min-width:400px;"
    >
      <q-bar class="bg-secondary">
        <div class="col text-center text-weight-bold">
          Add Purchase
        </div>

        <q-space />

        <q-btn
          dense
          flat
          icon="close"
          v-close-popup
        >
          <q-tooltip content-class="bg-white text-primary">
            Close
          </q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section>
        <div class="q-gutter-md">
          <q-form @submit="submitPurchase">
            <q-input
              square
              outlined
              v-model="quantity"
              label="Quantity Bought"
              label-color="white"
              class="q-pb-md"
              type="number"
            />
            <q-input
              square
              outlined
              v-model="amount"
              label="Cost Price"
              label-color="white"
              class="q-pb-md"
              type="number"
            />
            <q-input
              outlined
              v-model="dateTime"
              label-color="white"
            >
              <template v-slot:prepend>
                <q-icon
                  name="event"
                  class="cursor-pointer"
                  color="white"
                >
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="dateTime"
                      mask="YYYY-MM-DD HH:mm"
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>

              <template v-slot:append>
                <q-icon
                  name="access_time"
                  class="cursor-pointer"
                  color="white"
                >
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time
                      v-model="dateTime"
                      mask="YYYY-MM-DD HH:mm"
                      format24h
                    />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-btn
              label="Add"
              type="submit"
              color="accent"
              rounded
            />
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'AddPurchase',
  props: { value: { type: Boolean, default: false }, item: { type: Number, default: null } },
  data () {
    return { dateTime: '', amount: null, quantity: null }
  },
  computed: {
    ...mapGetters('storm', ['nextPurchaseID']),
    showDialogue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    ...mapMutations('storm', ['addPurchase']),
    submitPurchase () {
      this.addPurchase({ id: this.nextPurchaseID, item_id: parseInt(this.item), quantity: parseInt(this.quantity), amount: parseInt(this.amount), date_time: this.dateTime })
      this.quantity = null
      this.amount = null
      this.dateTime = ''
      this.showDialogue = false
    }
  }
}
</script>
