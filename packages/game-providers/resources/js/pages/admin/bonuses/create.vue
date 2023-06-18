<template>
  <v-container>
    <v-card>
      <v-toolbar>
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ $t('Assign bonus rounds') }}
        </v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text>
        <p>
          {{ $t('Find users you want to assign bonus rounds to.') }}
        </p>
        <v-tabs
          v-model="searchTab"
          align-with-title
        >
          <v-tab>
            {{ $t('By user') }}
          </v-tab>
          <v-tab>
            {{ $t('By bet volume') }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="searchTab" class="pt-7">
          <v-tab-item>
            <v-form v-model="searchByUserFormIsValid" @submit.prevent="searchByUser">
              <v-row>
                <v-col cols="12" md="6" lg="4">
                  <v-text-field
                    v-model="searchByUserForm.search"
                    :label="$t('User')"
                    :rules="[validationRequired]"
                    :placeholder="$t('ID, name or email')"
                    :disabled="searchByUserForm.busy"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-btn type="submit" color="primary" :disabled="!searchByUserFormIsValid || searchByUserForm.busy" :loading="searchByUserForm.busy">
                {{ $t('Search') }}
              </v-btn>
            </v-form>
          </v-tab-item>
          <v-tab-item>
            <v-form v-model="searchByBetVolumeFormIsValid" @submit.prevent="searchByBetVolume">
              <v-row>
                <v-col cols="12" md="6" lg="3">
                  <v-select
                    v-model="searchByBetVolumeForm.provider"
                    :items="providers"
                    :label="$t('Provider')"
                    :disabled="true"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <v-text-field
                    v-model.number="searchByBetVolumeForm.volume"
                    :label="$t('Bet volume')"
                    :rules="[validationPositiveInteger]"
                    :prefix="$t('exceeds')"
                    :suffix="$t('credits')"
                    :disabled="searchByBetVolumeForm.busy"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <v-menu
                    v-model="dateMenuStartDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="searchByBetVolumeForm.startDate"
                        :label="$t('Start date')"
                        readonly
                        outlined
                        clearable
                        prepend-inner-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="searchByBetVolumeForm.startDate"
                      @input="dateMenuStartDate = false"
                    />
                  </v-menu>
                </v-col>
                <v-col cols="12" md="6" lg="3">
                  <v-menu
                    v-model="dateMenuEndDate"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="searchByBetVolumeForm.endDate"
                        :label="$t('End date')"
                        readonly
                        outlined
                        clearable
                        prepend-inner-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="searchByBetVolumeForm.endDate"
                      @input="dateMenuEndDate = false"
                    />
                  </v-menu>
                </v-col>
              </v-row>
              <v-btn type="submit" color="primary" :disabled="!searchByBetVolumeFormIsValid || searchByBetVolumeForm.busy" :loading="searchByBetVolumeForm.busy">
                {{ $t('Search') }}
              </v-btn>
            </v-form>
          </v-tab-item>
        </v-tabs-items>
        <v-simple-table v-if="users.length" class="mt-5">
          <template #default>
            <thead>
              <tr>
                <th>
                  {{ $t('ID') }}
                </th>
                <th>
                  {{ $t('Name') }}
                </th>
                <th>
                  {{ $t('Email') }}
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="user in users"
                :key="user.id"
              >
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td class="text-right">
                  <v-btn color="secondary" :to="{ name: 'admin.users.show', params: { id: user.id } }" target="_blank">
                    {{ $t('View') }}
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div v-if="users.length" class="mt-10">
          <p class="my-5">
            {{ $t('Assign bonus rounds to the above users') }}
          </p>
          <v-form v-model="bonusFormIsValid" @submit.prevent="assignBonusRounds">
            <v-row>
              <v-col cols="12" md="3">
                <v-select
                  v-model="bonusForm.provider"
                  :items="providers"
                  :label="$t('Provider')"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model="bonusForm.gameId"
                  :label="$t('Game ID')"
                  :rules="[validationRequired]"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model.number="bonusForm.roundsCount"
                  :label="$t('Rounds')"
                  :rules="[validationPositiveInteger]"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="3">
                <v-text-field
                  v-model.number="bonusForm.bet"
                  :label="$t('Bet amount')"
                  :rules="[validationPositiveNumber]"
                  outlined
                />
              </v-col>
            </v-row>
            <v-btn type="submit" color="primary" :disabled="!bonusFormIsValid || bonusForm.busy" :loading="bonusForm.busy">
              {{ $t('Proceed') }}
            </v-btn>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Form from 'vform'
import FormMixin from '~/mixins/Form'
import { route } from '~/plugins/route'
import axios from 'axios'

export default {
  mixins: [FormMixin],

  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  metaInfo () {
    return { title: this.$t('Assign bonus rounds') }
  },

  data () {
    return {
      searchByUserFormIsValid: null,
      searchByBetVolumeFormIsValid: null,
      bonusFormIsValid: null,
      searchByUserForm: new Form({
        search: null
      }),
      searchByBetVolumeForm: new Form({
        provider: null,
        volume: null,
        startDate: null,
        endDate: null
      }),
      dateMenuStartDate: false,
      dateMenuEndDate: false,
      bonusForm: new Form({
        provider: null,
        gameId: null,
        roundsCount: null,
        bet: null,
        users: []
      }),
      searchTab: null,
      providers: [],
      users: []
    }
  },

  async created () {
    const { data } = await axios.get(route('game-providers.providers.all'), { params: { bonus: true } })

    this.providers = Object.keys(data).map(id => ({ value: data[id].code, text: data[id].name }))
  },

  methods: {
    async searchByUser () {
      const { data } = await this.searchByUserForm.post(route('admin.users.search'))
      this.users = data
    },
    async searchByBetVolume () {
      const { data } = await this.searchByBetVolumeForm.post(route('admin.game-providers.users.search'))
      this.users = data
    },
    async assignBonusRounds () {
      this.bonusForm.users = this.users.map(user => user.id)

      const { data } = await this.bonusForm.post(route('admin.game-providers.bonuses.store'))

      this.$store.dispatch('message/success', { text: data.message })

      this.$router.push({ name: 'admin.bonuses.providers.index' })
    }
  }
}
</script>
