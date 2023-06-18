<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <data-table
          :api="`/api/admin/users/${id}/tokens`"
          :title="$t('User {0} tokens', [id])"
          :headers="headers"
        >
          <template #table-prepend>
            <v-btn color="primary" :to="{ name: 'admin.users.tokens.create' }" class="mb-5">
              {{ $t('Create token') }}
            </v-btn>
          </template>
          <template #toolbar-prepend>
            <v-btn icon @click="$router.go(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </template>
        </data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable.vue'

export default {
  components: { DataTable },

  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  props: ['id'],

  metaInfo () {
    return { title: this.$t('User {0} tokens', [this.id]) }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('Provider'), value: 'game_provider.code', sortable: false },
        { text: this.$t('Token'), value: 'token', sortable: false },
        { text: this.$t('Created'), value: 'created_ago', align: 'right' }
      ]
    }
  }
}
</script>
