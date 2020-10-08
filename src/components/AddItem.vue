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
          Add Item
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
          <q-form @submit="submitItem">
            <q-input
              square
              outlined
              v-model="itemName"
              label="Item Name"
              label-color="white"
              class="q-pb-md"
            />

            <q-input
              v-model="description"
              outlined
              class="q-pb-md"
              type="textarea"
              label-color="white"
              label="Item Description"
            />
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
  name: 'AddItem',
  props: { value: { type: Boolean, default: false } },
  data () {
    return { description: '', itemName: '' }
  },
  computed: {
    ...mapGetters('storm', ['nextItemID']),
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
    ...mapMutations('storm', ['addItem']),
    submitItem () {
      this.addItem({ id: this.nextItemID, name: this.itemName, description: this.description })
      this.itemName = ''
      this.description = ''
      this.showDialogue = false
    }
  }
}
</script>
