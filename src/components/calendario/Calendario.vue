<script>
import Calendario from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    Calendario
  },
  data() {
    return {
      optionsCalendario: {
        plugins: [timeGridPlugin],
        initialView: 'timeGridWeek',
        slotMinTime: '08:00:00',
        height: 550,
        allDaySlot: false,
        timeFormat: 'h:mm',
        locale: 'pt',
        slotLabelFormat: {
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short'
        }
      }
    }
  },
  methods: {}
}
</script>
<template>
  <div class="d-flex flex-column p-4">
    <h2>Cadastro de horarios</h2>
    <Calendario :options="optionsCalendario" />
  </div>
</template>

<style>
.fc-col-header-cell-cushion {
  text-decoration: none;
  color: black;
}
.fc-scrollgrid-shrink-cushion{
  color: black;
}
</style>
