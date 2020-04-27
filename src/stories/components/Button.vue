<template>
    <button class="btn" :class="classes" @click="clickAction">
        <div class="spinner"></div>
        <span class="icon icon-add-standard" v-if="type === 'template'"></span>
        <div class="text-label">{{label}}</div>
    </button>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
      default: undefined
    },
    type: {
      type: String,
      required: true,
      default: undefined
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    action: {
      type: Function,
      required: true
    }
  },
  computed: {
    classes () {
      return `${this.type} ${this.disabled ? 'disabled' : ''} ${this.loading ? 'loading' : ''}`
    },
    clickAction () {
      return this.disabled ? function () { throw new Error('Button is disabled') } : this.action
    }
  }
}
</script>

<style scoped>
.btn {
  height: 40px;
  min-width: 89px;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  position: relative;
  padding: 0;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
  .btn .spinner {
    display: none;
    z-index: 2; }
  .btn .text-label {
    margin-right: 32px;
    margin-left: 32px;
    z-index: 2; }
  .btn .icon {
    margin-left: 8px;
    z-index: 2; }
    .btn .icon ~ .text-label {
      margin-left: 8px; }
  .btn:hover {
    box-shadow: 0 3px 5px 0 rgba(170, 170, 170, 0.2), 0 1px 18px 0 rgba(170, 170, 170, 0.14), 0 6px 10px 0 rgba(170, 170, 170, 0.12); }
  .btn:focus {
    box-shadow: 0 3px 5px 0 rgba(170, 170, 170, 0.2), 0 1px 18px 0 rgba(170, 170, 170, 0.14), 0 6px 10px 0 rgba(170, 170, 170, 0.12); }
  .btn.loading {
    box-shadow: 0 3px 5px 0 rgba(170, 170, 170, 0.2), 0 1px 18px 0 rgba(170, 170, 170, 0.14), 0 6px 10px 0 rgba(170, 170, 170, 0.12); }
    .btn.loading .spinner {
      display: flex !important; }
    .btn.loading .text-label, .btn.loading .icon {
      visibility: hidden; }
  .btn.disabled, .btn:disabled {
    opacity: 0.5;
    pointer-events: none; }

.btn.destructive {
  background-color: #d42902; }
  .btn.destructive .text-label {
    color: #ffffff; }
  .btn.destructive .spinner::before {
    border-top-color: #ffffff; }
  .btn.destructive .icon::before {
    color: #ffffff; }
  .btn.destructive:focus {
    background-color: #aa2102; }
    .btn.destructive:focus .text-label {
      color: #ffffff; }
  .btn.destructive.loading {
    background-color: #aa2102; }
    .btn.destructive.loading .text-label {
      color: #ffffff; }
  .btn.destructive:hover .text-label {
    color: #ffffff; }

.btn.confirmation {
  background-color: #e26812; }
  .btn.confirmation .text-label {
    color: #ffffff; }
  .btn.confirmation .spinner::before {
    border-top-color: #ffffff; }
  .btn.confirmation .icon::before {
    color: #ffffff; }
  .btn.confirmation:focus {
    background-color: #b5530e; }
    .btn.confirmation:focus .text-label {
      color: #ffffff; }
  .btn.confirmation.loading {
    background-color: #b5530e; }
    .btn.confirmation.loading .text-label {
      color: #ffffff; }
  .btn.confirmation:hover .text-label {
    color: #ffffff; }

.btn.connect {
  background-color: #ffb81c; }
  .btn.connect .text-label {
    color: #3d3d3d; }
  .btn.connect .spinner::before {
    border-top-color: #3d3d3d; }
  .btn.connect .icon::before {
    color: #3d3d3d; }
  .btn.connect:focus {
    background-color: #eea83c; }
    .btn.connect:focus .text-label {
      color: #3d3d3d; }
  .btn.connect.loading {
    background-color: #eea83c; }
    .btn.connect.loading .text-label {
      color: #3d3d3d; }
  .btn.connect:hover .text-label {
    color: #3d3d3d; }

.btn.vision {
  background-color: #7f2567; }
  .btn.vision .text-label {
    color: #ffffff; }
  .btn.vision .spinner::before {
    border-top-color: #ffffff; }
  .btn.vision .icon::before {
    color: #ffffff; }
  .btn.vision:focus {
    background-color: #661e52; }
    .btn.vision:focus .text-label {
      color: #ffffff; }
  .btn.vision.loading {
    background-color: #661e52; }
    .btn.vision.loading .text-label {
      color: #ffffff; }
  .btn.vision:hover .text-label {
    color: #ffffff; }

.btn.spotlight {
  background-color: #58c8ed; }
  .btn.spotlight .text-label {
    color: #3d3d3d; }
  .btn.spotlight .spinner::before {
    border-top-color: #3d3d3d; }
  .btn.spotlight .icon::before {
    color: #3d3d3d; }
  .btn.spotlight:focus {
    background-color: #46a0be; }
    .btn.spotlight:focus .text-label {
      color: #3d3d3d; }
  .btn.spotlight.loading {
    background-color: #46a0be; }
    .btn.spotlight.loading .text-label {
      color: #3d3d3d; }
  .btn.spotlight:hover .text-label {
    color: #3d3d3d; }

.btn.dialog {
  background-color: #327f86; }
  .btn.dialog .text-label {
    color: #ffffff; }
  .btn.dialog .spinner::before {
    border-top-color: #ffffff; }
  .btn.dialog .icon::before {
    color: #ffffff; }
  .btn.dialog:focus {
    background-color: #28666b; }
    .btn.dialog:focus .text-label {
      color: #ffffff; }
  .btn.dialog.loading {
    background-color: #28666b; }
    .btn.dialog.loading .text-label {
      color: #ffffff; }
  .btn.dialog:hover .text-label {
    color: #ffffff; }

.btn.config {
  background-color: #305080; }
  .btn.config .text-label {
    color: #ffffff; }
  .btn.config .spinner::before {
    border-top-color: #ffffff; }
  .btn.config .icon::before {
    color: #ffffff; }
  .btn.config:focus {
    background-color: #264066; }
    .btn.config:focus .text-label {
      color: #ffffff; }
  .btn.config.loading {
    background-color: #264066; }
    .btn.config.loading .text-label {
      color: #ffffff; }
  .btn.config:hover .text-label {
    color: #ffffff; }

.btn.secondary {
  background-color: #f2f2f2; }
  .btn.secondary .text-label {
    color: #6b6b6b; }
  .btn.secondary .spinner::before {
    border-top-color: #6b6b6b; }
  .btn.secondary .icon::before {
    color: #6b6b6b; }
  .btn.secondary:focus {
    background-color: #e6e6e6; }
    .btn.secondary:focus .text-label {
      color: #3d3d3d; }
  .btn.secondary.loading {
    background-color: #e6e6e6; }
    .btn.secondary.loading .text-label {
      color: #3d3d3d; }
  .btn.secondary:hover .text-label {
    color: #6b6b6b; }

.btn.template {
  background-color: #f2f2f2; }
  .btn.template .text-label {
    color: #6b6b6b; }
  .btn.template .spinner::before {
    border-top-color: #6b6b6b; }
  .btn.template .icon::before {
    color: #6b6b6b; }
  .btn.template:focus {
    background-color: #e6e6e6; }
    .btn.template:focus .text-label {
      color: #3d3d3d; }
  .btn.template.loading {
    background-color: #e6e6e6; }
    .btn.template.loading .text-label {
      color: #3d3d3d; }
  .btn.template:hover .text-label {
    color: #3d3d3d; }

.btn.template-border {
  background-color: #ffffff;
  border: #3d3d3d 1px solid; }
  .btn.template-border .text-label {
    color: #6b6b6b; }
  .btn.template-border .spinner::before {
    border-top-color: #ffffff; }
  .btn.template-border .icon::before {
    color: #6b6b6b; }
  .btn.template-border:focus {
    background-color: #3d3d3d; }
    .btn.template-border:focus .text-label {
      color: #ffffff; }
    .btn.template-border:focus:hover .text-label {
      color: #ffffff; }
  .btn.template-border.loading {
    background-color: #3d3d3d; }
    .btn.template-border.loading .text-label {
      color: #ffffff; }
  .btn.template-border:hover .text-label {
    color: #3d3d3d; }

.btn-toggle {
  height: 40px;
  min-width: 75px;
  position: relative;
  display: inline-flex; }
  .btn-toggle input {
    border-radius: 20px;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    left: 0; }
    .btn-toggle input:hover ~ .wrapper {
      background-color: rgba(0, 0, 0, 0.1); }
  .btn-toggle.loading .wrapper {
    background-color: rgba(0, 0, 0, 0.1); }
    .btn-toggle.loading .wrapper .text-label {
      visibility: hidden; }
    .btn-toggle.loading .wrapper .spinner {
      display: flex; }
  .btn-toggle.disabled {
    opacity: 0.5;
    pointer-events: none; }
  .btn-toggle .wrapper {
    height: 100%;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.05);
    transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out; }
    .btn-toggle .wrapper .text-label {
      margin-right: 32px;
      margin-left: 32px; }
  .btn-toggle.mini {
    height: 32px; }

.btn-toggle.config input:checked ~ .wrapper {
  background-color: #305080; }
  .btn-toggle.config input:checked ~ .wrapper .text-label {
    color: #ffffff; }

.btn-toggle.config input:checked:hover ~ .wrapper {
  background-color: #264066; }

.btn-toggle.config.loading input:checked ~ .wrapper {
  background-color: #264066; }
  .btn-toggle.config.loading input:checked ~ .wrapper .spinner::before {
    border-top-color: #ffffff; }

.btn-toggle.spotlight input:checked ~ .wrapper {
  background-color: #58c8ed; }
  .btn-toggle.spotlight input:checked ~ .wrapper .text-label {
    color: #3d3d3d; }

.btn-toggle.spotlight input:checked:hover ~ .wrapper {
  background-color: #46a0be; }

.btn-toggle.spotlight.loading input:checked ~ .wrapper {
  background-color: #46a0be; }
  .btn-toggle.spotlight.loading input:checked ~ .wrapper .spinner::before {
    border-top-color: #3d3d3d; }

.btn-toggle.dialog input:checked ~ .wrapper {
  background-color: #327f86; }
  .btn-toggle.dialog input:checked ~ .wrapper .text-label {
    color: #ffffff; }

.btn-toggle.dialog input:checked:hover ~ .wrapper {
  background-color: #28666b; }

.btn-toggle.dialog.loading input:checked ~ .wrapper {
  background-color: #28666b; }
  .btn-toggle.dialog.loading input:checked ~ .wrapper .spinner::before {
    border-top-color: #ffffff; }

.btn-toggle.vision input:checked ~ .wrapper {
  background-color: #7f2567; }
  .btn-toggle.vision input:checked ~ .wrapper .text-label {
    color: #ffffff; }

.btn-toggle.vision input:checked:hover ~ .wrapper {
  background-color: #661e52; }

.btn-toggle.vision.loading input:checked ~ .wrapper {
  background-color: #661e52; }
  .btn-toggle.vision.loading input:checked ~ .wrapper .spinner::before {
    border-top-color: #ffffff; }

.btn-toggle.connect input:checked ~ .wrapper {
  background-color: #ffb81c; }
  .btn-toggle.connect input:checked ~ .wrapper .text-label {
    color: #3d3d3d; }

.btn-toggle.connect input:checked:hover ~ .wrapper {
  background-color: #cc9316; }

.btn-toggle.connect.loading input:checked ~ .wrapper {
  background-color: #cc9316; }
  .btn-toggle.connect.loading input:checked ~ .wrapper .spinner::before {
    border-top-color: #3d3d3d; }
</style>