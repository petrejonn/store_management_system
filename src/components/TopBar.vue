<template>
  <q-header

    class="bg-secondary"
  >
    <q-bar class="q-electron-drag">
      <div>StoreM</div>

      <q-space />

      <q-btn
        dense
        flat
        icon="minimize"
        @click="minimize"
      />
      <q-btn
        dense
        flat
        icon="crop_square"
        @click="maximize"
      />
      <q-btn
        dense
        flat
        icon="close"
        @click="closeApp"
      />
    </q-bar>
  </q-header>
</template>

<script>
export default {
  name: 'TopBar',
  data () {
    return {
    }
  },
  methods: {
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },

    maximize () {
      if (process.env.MODE === 'electron') {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow()

        if (win.isMaximized()) {
          win.unmaximize()
        } else {
          win.maximize()
        }
      }
    },

    closeApp () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    }
  }
}
</script>
