<template>
  <v-container>
    <data-table
      api="/api/admin/game-providers/bonuses"
      :title="$t('Bonus rounds')"
      :headers="headers"
      :filters="['period', 'user-role']"
      :search="true"
      :search-placeholder="$t('User name or email')"
    >
      <template #table-prepend>
        <v-btn color="primary" :to="{ name: 'admin.bonuses.providers.create' }" class="mb-5">
          {{ $t('Assign bonus rounds') }}
        </v-btn>
      </template>
      <template v-slot:item.name="{ item }">
        <user-link :user="item.user" />
      </template>
    </data-table>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable'
import UserLink from '~/components/Admin/UserLink'

export default {
  components: { DataTable, UserLink },

  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  metaInfo () {
    return { title: this.$t('Bonus rounds') }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('User'), value: 'name', sortable: false },
        { text: this.$t('Provider'), value: 'game_provider.name', sortable: false },
        { text: this.$t('Bonus code'), value: 'external_id', sortable: false },
        { text: this.$t('Game ID'), value: 'game_id', sortable: false },
        { text: this.$t('Rounds count'), value: 'rounds_count', sortable: false, format: 'integer' },
        { text: this.$t('Currency'), value: 'currency', sortable: false },
        { text: this.$t('Bet'), value: 'bet', align: 'right', format: 'decimal' },
        { text: this.$t('Created'), value: 'created_ago', align: 'right' }
      ]
    }
  }
}
</script>
