<template>
  <q-card class="add-device-modal">
    <q-tabs v-model="tab" inline-label class="bg-primary text-white shadow-2">
      <q-tab
        name="connection"
        icon="settings_input_composite"
        label="Connection info"
      />
      <q-tab name="list" icon="block" label="Black / White List" />
    </q-tabs>

    <form @submit.prevent="submitForm">
      <div v-if="tab == 'connection'">
        <modal-header>Edit Device</modal-header>
        <div class="text-title text-center text-bold">Device Info..</div>
        <q-card-section class="row q-pb-none">
          <!-- Device Name -->
          <modal-device-name
            :deviceName.sync="deviceData.deviceName"
            ref="modalDeviceName"
          />

          <q-space />

          <!-- Device Type -->
          <modal-device-type :deviceType.sync="deviceData.deviceType" />
        </q-card-section>

        <q-card-section class="row q-pb-none">
          <!-- Device Zone -->
          <modal-device-zone :deviceZone.sync="devicesZones" />

          <q-space />

          <!-- Device Status -->
          <modal-device-status :deviceStatus.sync="deviceData.device_status" />
        </q-card-section>

        <!-- Belongs To -->
        <q-card-section class="row q-pb-none" style="justify-content:center">
          <modal-device-belongTo
            :deviceBelongTo.sync="deviceData.deviceBelongTo"
          />
        </q-card-section>

        <div class="q-mt-lg text-title text-center text-bold">
          Device Connection Info..
        </div>

        <!-- Facial -->
        <q-card-section
          class="row q-pb-none"
          style="justify-content:center"
          v-if="belongsTo('VMS')"
        >
          <modal-device-url
            :streamUrl.sync="deviceData.device_streamUrl"
            ref="modalDeviceURL"
          />
        </q-card-section>

        <q-card-section class="row q-pb-none">
          <!-- Device Ip -->
          <modal-device-ip
            :deviceIp.sync="deviceData.device_ip"
            ref="modalDeviceIp"
          />

          <q-space />

          <!-- Device Port -->
          <modal-device-port
            :devicePort.sync="deviceData.device_port"
            ref="modalDevicePort"
          />
        </q-card-section>

        <q-card-section class="row q-pb-none">
          <!-- Device Username -->
          <modal-device-username
            :userName.sync="deviceData.device_userName"
            ref="modalUserName"
          />

          <q-space />

          <!-- Device Password -->
          <modal-device-password
            :userPassword.sync="deviceData.device_userPassword"
            ref="modalUserPassword"
          />
        </q-card-section>

        <div class="q-mt-lg text-title text-center text-bold">
          Device Location Info..
        </div>
        <q-card-section class="row q-pb-none">
          <!-- Device Location Name -->
          <modal-device-location-name
            :locationName.sync="deviceData.device_locationName"
            ref="modalDeviceLocationName"
          />

          <!-- Device Location Latitude -->
          <modal-device-location-latitude
            :locationLatitude.sync="deviceData.device_locationLatitude"
            ref="modalDeviceLocationLatitude"
          />

          <!-- Device Location Longtude -->
          <modal-device-location-longtude
            :locationLongtude.sync="deviceData.device_locationLongtude"
            ref="modalDeviceLocationLongtude"
          />
        </q-card-section>
        <modal-buttons />
      </div>
      <black-white-list v-else />
    </form>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  props: ['deviceData'],
  data() {
    return {
      plateNo: '',
      tab: 'connection',
      initialBelnogsTo: null
      // deviceData: {
      //     deviceName: '',
      //     deviceType: '',
      //     deviceZone: '',
      //     deviceStatus: '',
      //     deviceIp: '192.168.1.100',
      // 	devicePort: null,
      // 	userName: '',
      // 	userPassword: '',
      // 	locationName: '',
      // 	locationLatitude: '27.1974137',
      // 	locationLongtude: '33.8381997'
      // }
    };
  },
  watch: {},
  components: {
    'modal-header': require('components/Settings/DevicesSettings/Modals/Shared/ModalHeader')
      .default,
    'modal-device-name': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceName')
      .default,
    'modal-device-type': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceType')
      .default,
    'modal-device-zone': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceZone')
      .default,
    'modal-device-status': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceStatus')
      .default,
    'modal-device-belongTo': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceBelongTo')
      .default,
    'modal-device-ip': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceIp')
      .default,
    'modal-device-port': require('components/Settings/DevicesSettings/Modals/Shared/ModalDevicePort')
      .default,
    'modal-device-username': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceUserName')
      .default,
    'modal-device-password': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceUserPassword')
      .default,
    'modal-device-location-name': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceLocationName')
      .default,
    'modal-device-location-latitude': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceLocationLatitude')
      .default,
    'modal-device-location-longtude': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceLocationLongtude')
      .default,
    'modal-buttons': require('components/Settings/UsersSettings/Modals/Shared/ModalButtons')
      .default,
    'modal-device-url': require('components/Settings/DevicesSettings/Modals/Shared/ModalDeviceURL')
      .default,

    'black-white-list': require('components/Settings/DevicesSettings/Modals/BlackWhiteList')
      .default
  },
  methods: {
    ...mapActions('devices', ['updateDevice']),
    ...mapActions('shinobi', ['addMonitor']),

    // Show Section If Belongs to Module name
    belongsTo(moduleName) {
      let status = true;

      if (this.deviceData.deviceBelongTo.length > 0) {
        let belongs = JSON.parse(this.deviceData.deviceBelongTo);
        belongs.map(module => {
          if (module.label == moduleName) {
            status = true;
          } else {
            status = false;
          }
        });
      }
      return status;
    },
    submitForm() {
      //console.log('submit editing', this.deviceData);
      let deviceNameValidation = this.$refs.modalDeviceName.$refs
        .modalDeviceName;
      deviceNameValidation.validate();

      let deviceIpValidation = this.$refs.modalDeviceIp.$refs.modalDeviceIp;
      deviceIpValidation.validate();

      if (!deviceNameValidation.hasError && !deviceIpValidation.hasError) {
        this.updateDevice(this.deviceData).then(response => {
          let belongsToVms = this.belongsTo('VMS');
          console.log('belongsToVms:', belongsToVms);
          if (belongsToVms) {
            console.log('this.deviceData:', this.deviceData);
            this.addMonitor({
              id: this.deviceData.id,
              name: this.deviceData.deviceName,
              host: this.deviceData.device_ip,
              port: this.deviceData.device_port,
              username: this.deviceData.device_userName,
              password: this.deviceData.device_userPassword
            });
          }
        });
      }
    }
  },
  mounted() {
    console.log('device data', this.deviceData);
    this.initialBelnogsTo = this.deviceData.deviceBelongTo;
    // Todo compare previous belongs to and new one then remove vms monitor if removed
  },
  computed: {
    ...mapGetters('devices', ['uniqueZones']),
    devicesZones: {
      get() {
        var first = this.deviceData.deviceZone;
        this.uniqueZones.sort(function(x, y) {
          return x == first ? -1 : y == first ? 1 : 0;
        });
        return this.uniqueZones;
      },
      set(value) {
        this.deviceData.deviceZone = value;
      }
    }
  }
};
</script>
<style scoped>
.add-device-modal {
  min-width: 500px;
}
</style>
