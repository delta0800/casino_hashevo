<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-toolbar>
            <v-btn icon @click="$router.go(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-toolbar-title>
              {{ $t('Create new token for user {0}', [id]) }}
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form v-model="formIsValid" @submit.prevent="process">
              <v-text-field
                v-model="form.provider"
                :label="$t('Provider')"
                :disabled="form.busy"
                :rules="[validationRequired]"
                :error="form.errors.has('provider')"
                :error-messages="form.errors.get('provider')"
                outlined
                @keydown="clearFormErrors"
              />

              <v-btn type="submit" color="primary" :disabled="!formIsValid || form.busy" :loading="form.busy">
                {{ $t('Create') }}
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Form from 'vform'
import FormMixin from '~/mixins/Form'

export default {
  mixins: [FormMixin],

  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  props: ['id'],

  metaInfo () {
    return { title: this.$t('Account {0}', [this.id]) }
  },

  data () {
    return {
      form: new Form({
        provider: null
      })
    }
  },

  methods: {
    async process () {
      const { data } = await this.form.post(`/api/admin/users/${this.id}/tokens`)

      this.$store.dispatch('message/success', { text: data.message })

      this.$router.push({ name: 'admin.users.tokens.index' })
    }
  }
}
</script>
