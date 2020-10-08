<template>
  <q-page class="bg-prim">
    <div class="q-pa-md" />
    <div class="q-pa-md">
      <div class="row justify-center">
        <div class="col-10">
          <div class="row q-col-gutter-xs">
            <div class="col-8">
              <q-card
                class="bg-secondary"
                flat
              >
                <q-card-section>
                  <apexchart
                    type="area"
                    :options="chartOptions"
                    :series="series"
                  />
                </q-card-section>
                <q-list>
                  <q-item class="text-white">
                    <strong class="text-accent">Description:  </strong> {{ singleItemGetter(parseInt($route.params.id)).description }}
                  </q-item>
                  <q-item class="text-white">
                    <strong class="text-accent">Remaining Quantity:  </strong> {{ itemQty(parseInt($route.params.id)) }}
                  </q-item>
                </q-list>
              </q-card>
            </div>
          </div>
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
      selectedItem: 1,
      chartOptions: {
        fill: { type: 'solid' },
        colors: ['#ff1744', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC']
        }
      },
      series: [{
        name: 'Sales',
        data: this.salesCount()

      }]
    }
  },
  computed: {
    ...mapGetters('storm', ['itemsGetter', 'monthlySales', 'singleItemGetter', 'itemQty'])

  },
  methods: {
    salesCount () {
      const sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      this.$store.state.storm.sales.filter(sale => sale.item_id.toString() === this.$route.params.id).map(sale => {
        const date = new Date(sale.date_time)
        sales[date.getMonth()] = sale.quantity
      })
      return sales
    }
  }
}
</script>
