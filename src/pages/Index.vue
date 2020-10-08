<template>
  <q-page class="bg-prim">
    <div class="q-pa-md" />
    <div class="q-pa-md">
      <div class="row justify-center">
        <div class="col-10">
          <q-card
            class="transparent"
            flat
          >
            <q-card-section>
              <q-table
                flat
                title="Store Stock"
                class="bg-secondary text-white"
                :data="itemList"
                :columns="columns"
                color="accent"
                row-key="name"
              >
                <template v-slot:top>
                  <img
                    style="height: 50px; width: 50px"
                    src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
                  >

                  <q-space />

                  <q-btn
                    color="accent"
                    label="Add Item"
                    rounded
                    @click="addItem = true"
                  />
                </template>
                <template v-slot:body-cell-name="props">
                  <q-td :props="props">
                    <div>
                      <q-badge
                        color="accent"
                        :label="props.value"
                        @click="navigate(props.row.id)"
                      />
                    </div>
                    <div class="my-table-details">
                      {{ props.row.description }}
                    </div>
                  </q-td>
                </template>
                <template v-slot:body-cell-purchases="props">
                  <q-td :props="props">
                    <q-btn
                      icon="add"
                      flat
                      @click="clickedItem=props.row.id; addPurchase = true;"
                    />
                  </q-td>
                </template>
                <template v-slot:body-cell-sales="props">
                  <q-td :props="props">
                    <q-btn
                      icon="remove"
                      flat
                      @click="clickedItem=props.row.id; addSales = true"
                    />
                  </q-td>
                </template>
              </q-table>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <add-item v-model="addItem" />
      <add-purchase
        v-model="addPurchase"
        :item="clickedItem"
      />
      <add-sales
        v-model="addSales"
        :item="clickedItem"
      />
    </div>
  </q-page>
</template>
<style >
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 200px;
  white-space: normal;
  color: rgb(138, 133, 133);
  margin-top: 4px;
}
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  data () {
    return {
      addItem: false,
      addPurchase: false,
      addSales: false,
      clickedItem: null,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'ITEM',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'qty',
          align: 'center',
          label: 'QTY',
          field: 'qty',
          sortable: true
        },
        { name: 'purchases', label: 'PURCHASES', field: 'purchases' },
        { name: 'sales', label: 'SALES', field: 'sales' }
      ]

    }
  },
  computed: {
    ...mapGetters('storm', ['itemsGetter', 'itemQty']),
    itemList () {
      const itms = this.itemsGetter
      itms.forEach(itm => {
        itm.qty = this.itemQty(parseInt(itm.id))
      })
      return itms
    }
  },
  methods: {
    navigate (id) {
      this.$router.push({ path: `report/${id}` })
      console.log(id)
    }
  }
}
</script>
