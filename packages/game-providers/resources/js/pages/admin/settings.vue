<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('BGaming') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.GAME_PROVIDERS_BGAMING_API_ID"
              :label="$t('Casino ID')"
              :error="form.errors.has('GAME_PROVIDERS_BGAMING_API_ID')"
              :error-messages="form.errors.get('GAME_PROVIDERS_BGAMING_API_ID')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_BGAMING_API_ID')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_BGAMING_API_ENDPOINT"
              :label="$t('Endpoint')"
              :error="form.errors.has('GAME_PROVIDERS_BGAMING_API_ENDPOINT')"
              :error-messages="form.errors.get('GAME_PROVIDERS_BGAMING_API_ENDPOINT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_BGAMING_API_ENDPOINT')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_BGAMING_API_SECRET_KEY"
              :label="$t('Auth token')"
              :error="form.errors.has('GAME_PROVIDERS_BGAMING_API_SECRET_KEY')"
              :error-messages="form.errors.get('GAME_PROVIDERS_BGAMING_API_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_BGAMING_API_SECRET_KEY')"
            />

            <v-text-field
              ref="bgamingCallbackUrl"
              :value="getCallbackUrl('bgaming')"
              :label="$t('Callback URL')"
              :persistent-hint="true"
              :hint="$t('The callback URL should be provided to BGaming support')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              @click:append="copyToClipboard($refs.bgamingCallbackUrl.$el.querySelector('input'))"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE"
              :label="$t('Currency')"
              :rules="[validationRequired]"
              :error="form.errors.has('GAME_PROVIDERS_BGAMING_CURRENCY_CODE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_BGAMING_CURRENCY_CODE')"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_BGAMING_CURRENCY_CODE')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS"
              :label="$t('Number of decimals')"
              :rules="[validationNonNegativeInteger]"
              :error="form.errors.has('GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS')"
              :error-messages="form.errors.get('GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS')"
              :persistent-hint="true"
              :hint="$t('Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals.')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_BGAMING_CURRENCY_RATE"
              :label="$t('Conversion rate')"
              type="text"
              :disabled="!form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE"
              :rules="[validationRequired, validationPositiveNumber]"
              :error="form.errors.has('GAME_PROVIDERS_BGAMING_CURRENCY_RATE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_BGAMING_CURRENCY_RATE')"
              :prefix="form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE ? '1 ' + form.GAME_PROVIDERS_BGAMING_CURRENCY_CODE + ' = ' : ''"
              :suffix="$t('credits')"
              :hint="$t('Amount of credits per 1 unit of the reference currency')"
              :persistent-hint="true"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event,'GAME_PROVIDERS_BGAMING_CURRENCY_RATE')"
            />

            <file-upload
              v-model="form.GAME_PROVIDERS_BGAMING_GAMES_FILE"
              :label="$t('Games list')"
              name="games"
              :folder="`games/${packageId}/bgaming`"
              accept=".yml"
              class="mt-5"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Evoplay') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.GAME_PROVIDERS_EVOPLAY_API_ID"
              :label="$t('Project ID')"
              :error="form.errors.has('GAME_PROVIDERS_EVOPLAY_API_ID')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EVOPLAY_API_ID')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EVOPLAY_API_ID')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY"
              :label="$t('Secret key')"
              :error="form.errors.has('GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY')"
            />

            <v-text-field
              ref="evoplayCallbackUrl"
              :value="getCallbackUrl('evoplay')"
              :label="$t('Callback URL')"
              :persistent-hint="true"
              :hint="$t('The callback URL should be inserted in Evoplay backend (Evoplay Entertainment --> Casino Accounts --> double click on an account)')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              @click:append="copyToClipboard($refs.evoplayCallbackUrl.$el.querySelector('input'))"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE"
              :label="$t('Currency')"
              :rules="[validationRequired]"
              :error="form.errors.has('GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE')"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS"
              :label="$t('Number of decimals')"
              :rules="[validationNonNegativeInteger]"
              :error="form.errors.has('GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS')"
              :persistent-hint="true"
              :hint="$t('Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals.')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE"
              :label="$t('Conversion rate')"
              type="text"
              :disabled="!form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE"
              :rules="[validationRequired, validationPositiveNumber]"
              :error="form.errors.has('GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE')"
              :prefix="form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE ? '1 ' + form.GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE + ' = ' : ''"
              :suffix="$t('credits')"
              :hint="$t('Amount of credits per 1 unit of the reference currency')"
              :persistent-hint="true"
              outlined
              @keydown="clearFormErrors($event,'GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE')"
            />

            <v-switch
              v-model="form.GAME_PROVIDERS_EVOPLAY_API_VALIDATE_IP"
              :label="$t('Validate IP address in callbacks')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('KA Gaming') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.GAME_PROVIDERS_KAGAMING_API_ID"
              :label="$t('Partner name')"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_API_ID')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_API_ID')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_KAGAMING_API_ID')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY"
              :label="$t('Access key')"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_KAGAMING_API_SECRET_KEY"
              :label="$t('Secret key')"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_API_SECRET_KEY')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_API_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_KAGAMING_API_SECRET_KEY')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_KAGAMING_API_ENDPOINT"
              :label="$t('API URL')"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_API_ENDPOINT')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_API_ENDPOINT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_KAGAMING_API_ENDPOINT')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL"
              :label="$t('API game launch URL')"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL')"
            />

            <v-text-field
              ref="kagamingCallbackUrl"
              :value="getCallbackUrl('kagaming')"
              :label="$t('Callback URL')"
              :persistent-hint="true"
              :hint="$t('The callback URL should be provided to KA Gaming support when setting up the environment.')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              @click:append="copyToClipboard($refs.kagamingCallbackUrl.$el.querySelector('input'))"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE"
              :label="$t('Currency')"
              :rules="[validationRequired]"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_CURRENCY_CODE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_CURRENCY_CODE')"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_KAGAMING_CURRENCY_CODE')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS"
              :label="$t('Number of decimals')"
              :rules="[validationNonNegativeInteger]"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS')"
              :persistent-hint="true"
              :hint="$t('Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals.')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_KAGAMING_CURRENCY_RATE"
              :label="$t('Conversion rate')"
              type="text"
              :disabled="!form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE"
              :rules="[validationRequired, validationPositiveNumber]"
              :error="form.errors.has('GAME_PROVIDERS_KAGAMING_CURRENCY_RATE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_KAGAMING_CURRENCY_RATE')"
              :prefix="form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE ? '1 ' + form.GAME_PROVIDERS_KAGAMING_CURRENCY_CODE + ' = ' : ''"
              :suffix="$t('credits')"
              :hint="$t('Amount of credits per 1 unit of the reference currency')"
              :persistent-hint="true"
              outlined
              @keydown="clearFormErrors($event,'GAME_PROVIDERS_KAGAMING_CURRENCY_RATE')"
            />

            <v-switch
              v-model="form.GAME_PROVIDERS_KAGAMING_API_VALIDATE_IP"
              :label="$t('Validate IP address in callbacks')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Ezugi') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.GAME_PROVIDERS_EZUGI_API_ID"
              :label="$t('Operator ID')"
              :error="form.errors.has('GAME_PROVIDERS_EZUGI_API_ID')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EZUGI_API_ID')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EZUGI_API_ID')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_EZUGI_API_ENDPOINT"
              :label="$t('Endpoint')"
              :error="form.errors.has('GAME_PROVIDERS_EZUGI_API_ENDPOINT')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EZUGI_API_ENDPOINT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EZUGI_API_ENDPOINT')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_EZUGI_API_SECRET_KEY"
              :label="$t('Secret key')"
              :error="form.errors.has('GAME_PROVIDERS_EZUGI_API_SECRET_KEY')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EZUGI_API_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EZUGI_API_SECRET_KEY')"
            />

            <v-text-field
              ref="ezugiCallbackUrl"
              :value="getCallbackUrl('ezugi')"
              :label="$t('Callback URL')"
              :persistent-hint="true"
              :hint="$t('The callback URL should be provided to Ezugi support')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              @click:append="copyToClipboard($refs.ezugiCallbackUrl.$el.querySelector('input'))"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE"
              :label="$t('Currency')"
              :rules="[validationRequired]"
              :error="form.errors.has('GAME_PROVIDERS_EZUGI_CURRENCY_CODE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EZUGI_CURRENCY_CODE')"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EZUGI_CURRENCY_CODE')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS"
              :label="$t('Number of decimals')"
              :rules="[validationNonNegativeInteger]"
              :error="form.errors.has('GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS')"
              :persistent-hint="true"
              :hint="$t('Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals.')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_EZUGI_CURRENCY_RATE"
              :label="$t('Conversion rate')"
              type="text"
              :disabled="!form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE"
              :rules="[validationRequired, validationPositiveNumber]"
              :error="form.errors.has('GAME_PROVIDERS_EZUGI_CURRENCY_RATE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_EZUGI_CURRENCY_RATE')"
              :prefix="form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE ? '1 ' + form.GAME_PROVIDERS_EZUGI_CURRENCY_CODE + ' = ' : ''"
              :suffix="$t('credits')"
              :hint="$t('Amount of credits per 1 unit of the reference currency')"
              :persistent-hint="true"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event,'GAME_PROVIDERS_EZUGI_CURRENCY_RATE')"
            />

            <file-upload
              v-model="form.GAME_PROVIDERS_EZUGI_GAMES_FILE"
              :label="$t('Games list')"
              name="games"
              :folder="`games/${packageId}/ezugi`"
              accept=".json"
              class="mt-5"
            />

            <v-switch
              v-model="form.GAME_PROVIDERS_EZUGI_API_VALIDATE_IP"
              :label="$t('Validate IP address in callbacks')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('TvBet') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.GAME_PROVIDERS_TVBET_API_ID"
              :label="$t('Client ID')"
              :error="form.errors.has('GAME_PROVIDERS_TVBET_API_ID')"
              :error-messages="form.errors.get('GAME_PROVIDERS_TVBET_API_ID')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_TVBET_API_ID')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_TVBET_API_SECRET_KEY"
              :label="$t('Secret key')"
              :error="form.errors.has('GAME_PROVIDERS_TVBET_API_SECRET_KEY')"
              :error-messages="form.errors.get('GAME_PROVIDERS_TVBET_API_SECRET_KEY')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_TVBET_API_SECRET_KEY')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_TVBET_API_ENDPOINT"
              :label="$t('Endpoint')"
              :error="form.errors.has('GAME_PROVIDERS_TVBET_API_ENDPOINT')"
              :error-messages="form.errors.get('GAME_PROVIDERS_TVBET_API_ENDPOINT')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_TVBET_API_ENDPOINT')"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_TVBET_API_FRAME_URL"
              :label="$t('Frame URL')"
              :error="form.errors.has('GAME_PROVIDERS_TVBET_API_FRAME_URL')"
              :error-messages="form.errors.get('GAME_PROVIDERS_TVBET_API_FRAME_URL')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_TVBET_API_FRAME_URL')"
            />

            <v-text-field
              ref="tvbetCallbackUrl"
              :value="getCallbackUrl('tvbet')"
              :label="$t('Callback URL')"
              :persistent-hint="true"
              :hint="$t('The callback URL should be provided to TvBet support')"
              readonly
              outlined
              append-icon="mdi-content-copy"
              @click:append="copyToClipboard($refs.tvbetCallbackUrl.$el.querySelector('input'))"
            />

            <v-text-field
              v-model="form.GAME_PROVIDERS_TVBET_CURRENCY_CODE"
              :label="$t('Currency')"
              :rules="[validationRequired]"
              :error="form.errors.has('GAME_PROVIDERS_TVBET_CURRENCY_CODE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_TVBET_CURRENCY_CODE')"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_TVBET_CURRENCY_CODE')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS"
              :label="$t('Number of decimals')"
              :rules="[validationNonNegativeInteger]"
              :error="form.errors.has('GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS')"
              :error-messages="form.errors.get('GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS')"
              :persistent-hint="true"
              :hint="$t('Most fiat currencies have 2 decimals, most cryptocurrencies have 8 decimals.')"
              outlined
              @keydown="clearFormErrors($event, 'GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS')"
            />

            <v-text-field
              v-model.number="form.GAME_PROVIDERS_TVBET_CURRENCY_RATE"
              :label="$t('Conversion rate')"
              type="text"
              :disabled="!form.GAME_PROVIDERS_TVBET_CURRENCY_CODE"
              :rules="[validationRequired, validationPositiveNumber]"
              :error="form.errors.has('GAME_PROVIDERS_TVBET_CURRENCY_RATE')"
              :error-messages="form.errors.get('GAME_PROVIDERS_TVBET_CURRENCY_RATE')"
              :prefix="form.GAME_PROVIDERS_TVBET_CURRENCY_CODE ? '1 ' + form.GAME_PROVIDERS_TVBET_CURRENCY_CODE + ' = ' : ''"
              :suffix="$t('credits')"
              :hint="$t('Amount of credits per 1 unit of the reference currency')"
              :persistent-hint="true"
              outlined
              class="mt-5"
              @keydown="clearFormErrors($event,'GAME_PROVIDERS_TVBET_CURRENCY_RATE')"
            />

            <file-upload
              v-model="form.GAME_PROVIDERS_TVBET_GAMES_FILE"
              :label="$t('Games list')"
              name="games"
              :folder="`games/${packageId}/tvbet`"
              accept=".json"
              class="mt-5"
            />

            <v-switch
              v-model="form.GAME_PROVIDERS_TVBET_API_VALIDATE_IP"
              :label="$t('Validate IP address in callbacks')"
              color="primary"
              false-value="false"
              true-value="true"
            />

            <v-switch
              v-model="form.GAME_PROVIDERS_TVBET_API_IS_TEST"
              :label="$t('Test mode')"
              color="primary"
              false-value="false"
              true-value="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import { config } from '~/plugins/config'
import FormMixin from '~/mixins/Form'
import { baseUrl, copyToClipboard } from '~/plugins/utils'
import FileUpload from '~/components/Admin/FileUpload'

export default {
  components: { FileUpload },

  mixins: [FormMixin],

  props: {
    packageId: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      variables: {
        GAME_PROVIDERS_BGAMING_API_ID: config(`${this.packageId}.providers.bgaming.api.id`),
        GAME_PROVIDERS_BGAMING_API_SECRET_KEY: config(`${this.packageId}.providers.bgaming.api.secret_key`),
        GAME_PROVIDERS_BGAMING_API_ENDPOINT: config(`${this.packageId}.providers.bgaming.api.endpoint`),
        GAME_PROVIDERS_BGAMING_CURRENCY_CODE: config(`${this.packageId}.providers.bgaming.currency.code`),
        GAME_PROVIDERS_BGAMING_CURRENCY_DECIMALS: config(`${this.packageId}.providers.bgaming.currency.decimals`),
        GAME_PROVIDERS_BGAMING_CURRENCY_RATE: config(`${this.packageId}.providers.bgaming.currency.rate`),
        GAME_PROVIDERS_BGAMING_GAMES_FILE: config(`${this.packageId}.providers.bgaming.games.file`),
        GAME_PROVIDERS_EVOPLAY_API_ID: config(`${this.packageId}.providers.evoplay.api.id`),
        GAME_PROVIDERS_EVOPLAY_API_SECRET_KEY: config(`${this.packageId}.providers.evoplay.api.secret_key`),
        GAME_PROVIDERS_EVOPLAY_CURRENCY_CODE: config(`${this.packageId}.providers.evoplay.currency.code`),
        GAME_PROVIDERS_EVOPLAY_CURRENCY_DECIMALS: config(`${this.packageId}.providers.evoplay.currency.decimals`),
        GAME_PROVIDERS_EVOPLAY_CURRENCY_RATE: config(`${this.packageId}.providers.evoplay.currency.rate`),
        GAME_PROVIDERS_EVOPLAY_API_VALIDATE_IP: '' + config(`${this.packageId}.providers.evoplay.api.validate_ip`),
        GAME_PROVIDERS_KAGAMING_API_ID: config(`${this.packageId}.providers.kagaming.api.id`),
        GAME_PROVIDERS_KAGAMING_API_ACCESS_KEY: config(`${this.packageId}.providers.kagaming.api.access_key`),
        GAME_PROVIDERS_KAGAMING_API_SECRET_KEY: config(`${this.packageId}.providers.kagaming.api.secret_key`),
        GAME_PROVIDERS_KAGAMING_API_ENDPOINT: config(`${this.packageId}.providers.kagaming.api.endpoint`),
        GAME_PROVIDERS_KAGAMING_API_GAME_LAUNCH_URL: config(`${this.packageId}.providers.kagaming.api.game_launch_url`),
        GAME_PROVIDERS_KAGAMING_CURRENCY_CODE: config(`${this.packageId}.providers.kagaming.currency.code`),
        GAME_PROVIDERS_KAGAMING_CURRENCY_DECIMALS: config(`${this.packageId}.providers.kagaming.currency.decimals`),
        GAME_PROVIDERS_KAGAMING_CURRENCY_RATE: config(`${this.packageId}.providers.kagaming.currency.rate`),
        GAME_PROVIDERS_KAGAMING_API_VALIDATE_IP: '' + config(`${this.packageId}.providers.kagaming.api.validate_ip`),
        GAME_PROVIDERS_EZUGI_API_ID: config(`${this.packageId}.providers.ezugi.api.id`),
        GAME_PROVIDERS_EZUGI_API_SECRET_KEY: config(`${this.packageId}.providers.ezugi.api.secret_key`),
        GAME_PROVIDERS_EZUGI_API_ENDPOINT: config(`${this.packageId}.providers.ezugi.api.endpoint`),
        GAME_PROVIDERS_EZUGI_CURRENCY_CODE: config(`${this.packageId}.providers.ezugi.currency.code`),
        GAME_PROVIDERS_EZUGI_CURRENCY_DECIMALS: config(`${this.packageId}.providers.ezugi.currency.decimals`),
        GAME_PROVIDERS_EZUGI_CURRENCY_RATE: config(`${this.packageId}.providers.ezugi.currency.rate`),
        GAME_PROVIDERS_EZUGI_GAMES_FILE: config(`${this.packageId}.providers.ezugi.games.file`),
        GAME_PROVIDERS_EZUGI_API_VALIDATE_IP: '' + config(`${this.packageId}.providers.ezugi.api.validate_ip`),
        GAME_PROVIDERS_TVBET_API_ID: config(`${this.packageId}.providers.tvbet.api.id`),
        GAME_PROVIDERS_TVBET_API_SECRET_KEY: config(`${this.packageId}.providers.tvbet.api.secret_key`),
        GAME_PROVIDERS_TVBET_API_ENDPOINT: config(`${this.packageId}.providers.tvbet.api.endpoint`),
        GAME_PROVIDERS_TVBET_API_FRAME_URL: config(`${this.packageId}.providers.tvbet.api.frame_url`),
        GAME_PROVIDERS_TVBET_CURRENCY_CODE: config(`${this.packageId}.providers.tvbet.currency.code`),
        GAME_PROVIDERS_TVBET_CURRENCY_DECIMALS: config(`${this.packageId}.providers.tvbet.currency.decimals`),
        GAME_PROVIDERS_TVBET_CURRENCY_RATE: config(`${this.packageId}.providers.tvbet.currency.rate`),
        GAME_PROVIDERS_TVBET_GAMES_FILE: config(`${this.packageId}.providers.tvbet.games.file`),
        GAME_PROVIDERS_TVBET_API_VALIDATE_IP: '' + config(`${this.packageId}.providers.tvbet.api.validate_ip`),
        GAME_PROVIDERS_TVBET_API_IS_TEST: '' + config(`${this.packageId}.providers.tvbet.api.is_test`)
      }
    }
  },

  created () {
    this.$emit('input', this.variables)
  },

  methods: {
    copyToClipboard,
    getCallbackUrl (provider) {
      const url = config('app.url') || baseUrl()
      return `${url}/api/providers/${provider}`
    }
  }
}
</script>
