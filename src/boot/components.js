// import something here
import TopBar from 'components/TopBar'
import AddItem from 'components/AddItem'
import AddPurchase from 'components/AddPurchase'
import AddSales from 'components/AddSales'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
export default async ({ Vue }) => {
  Vue.component('top-bar', TopBar)
  Vue.component('add-item', AddItem)
  Vue.component('add-purchase', AddPurchase)
  Vue.component('add-sales', AddSales)
}
