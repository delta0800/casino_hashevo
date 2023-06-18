<template>
  <v-container v-if="provider" class="mt-5">
    <v-row>
      <v-col>
        <v-img
          :src="provider.banner_url"
          :alt="provider.name"
          max-height="75px"
          :contain="true"
          class="mx-auto"
        />
      </v-col>
    </v-row>
    <dynamic-games-list
      ref="games"
      :title="$t('{0} games', [provider.name])"
      :games="games"
      :display-style="config('settings.content.home.provider_games.display_style')"
      :filter="true"
      :search="true"
      class="mt-10"
    />
  </v-container>
</template>

<script>
import { config } from '~/plugins/config'
import { unique } from '~/plugins/utils'
import DynamicGamesList from '~/components/Home/DynamicGamesList'
import axios from 'axios'
import { route } from '~/plugins/route'

export default {
  components: { DynamicGamesList },

  middleware: [],

  metaInfo () {
    return { title: this.provider ? this.$t('{0} games', [this.provider.name]) : '' }
  },

  data () {
    return {
      provider: null
    }
  },

  computed: {
    games () {
      return this.$store.getters['package-manager/getProviderGamesById'](this.$route.params.provider)
    },
    categories () {
      return unique(this.games.map(game => game.category))
    }
  },

  async created () {
    const { data } = await axios.get(route('game-providers.providers.show').replace('{gameProvider}', this.$route.params.provider))
    this.provider = data
  },

  methods: {
    config
  }
}
</script>
