<template>
  <div>
    <key-value-table
      name="game"
      :api="`/api/history/games/${id}`"
      :headers="headers"
    >
      <template v-slot:account.user.name="{ item: { account : { user } } }">
        <user-profile-modal :user="user" />
      </template>
      <template v-slot:gameable.data="{ item: { gameable: { data } } }">
        <v-dialog v-if="data" v-model="modal" width="900">
          <template v-slot:activator="{ on }">
            <slot :on="on">
              <a class="link" v-on="on">
                {{ $t('View') }}
              </a>
            </slot>
          </template>
          <v-card>
            <v-toolbar>
              <v-toolbar-title>
                {{ $t('Callbacks history') }}
              </v-toolbar-title>
              <v-spacer />
              <v-btn icon @click="modal = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text class="pa-4">
              <pre>{{ data }}</pre>
            </v-card-text>
          </v-card>
        </v-dialog>
      </template>
    </key-value-table>
  </div>
</template>

<script>
import KeyValueTable from '~/components/KeyValueTable'
import UserProfileModal from '~/components/UserProfileModal'
import { mapState } from 'vuex'

export default {
  components: { UserProfileModal, KeyValueTable },

  props: ['id'],

  data () {
    return {
      modal: false
    }
  },

  computed: {
    ...mapState('auth', ['user']),
    headers () {
      const headers = [
        { text: this.$t('External ID'), value: 'gameable.external_id' },
        { text: this.$t('Player'), value: 'account.user.name' },
        { text: this.$t('Provider'), value: 'gameable.provider_name' },
        { text: this.$t('Game'), value: 'title' },
        { text: this.$t('Bet'), value: 'bet', format: 'decimal' },
        { text: this.$t('Win'), value: 'win', format: 'decimal' },
        { text: this.$t('Profit'), value: 'profit', format: 'decimal' },
        { text: this.$t('Played'), value: 'updated_ago' }
      ]

      if (this.user.is_admin) {
        headers.push({ text: this.$t('Callbacks'), value: 'gameable.data' })
      }

      return headers
    }
  }
}
</script>
