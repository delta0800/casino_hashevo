<template>
  <iframe v-if="gameUrl" id="game-provider-iframe" frameborder="0" allowfullscreen :src="gameUrl" />
</template>

<script>
import axios from 'axios'
import { route } from '~/plugins/route'

export default {
  beforeRouteUpdate (to, from, next) {
    this.loadGame(to.params.provider, to.params.game)

    next()
  },

  middleware: ['auth', 'verified', '2fa_passed'],

  metaInfo () {
    return { title: this.$t('{0} games', [this.provider]) }
  },

  data () {
    return {
      gameUrl: null
    }
  },

  computed: {
    provider () {
      return this.$route.params.provider
    },
    game () {
      return this.$route.params.game
    }
  },

  created () {
    this.loadGame(this.provider, this.game)
  },

  methods: {
    async loadGame (provider, game) {
      const { data: url } = await axios.get(route('game-providers.games.url').replace('{gameProvider}', provider).replace('{id}', game))
      this.gameUrl = url
    }
  }
}
</script>
<style lang="scss" scoped>
iframe {
  height: calc(100vh - 100px);
  width: 100%;
  overflow: hidden;
}
</style>
