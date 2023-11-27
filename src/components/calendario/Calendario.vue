<script>
import Calendario from '@fullcalendar/vue3'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Responses from '../../api/Responses'

export default {
  components: {
    Calendario
  },
  data() {
    return {
      optionsCalendario: {
        plugins: [timeGridPlugin, interactionPlugin],
        initialView: 'timeGridWeek',
        headerToolbar: {
          center: 'title',
          left: '',
          right: 'prev,next'
        },
        contentHeight: 8,
        hiddenDays: [0], // Removendo domingos
        slotMinTime: '08:00:00',
        slotDuration: '01:00:00',
        height: 550,
        allDaySlot: false,
        locale: 'pt',
        slotLabelFormat: {
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short'
        },
        // EVENTOS
        dateClick: (event) => this.marcarHorario(event),
        eventClick: (data) => this.desmarcarHorario(data)
      }
    }
  },
  methods: {
    async marcarHorario(event) {
      const response = await Responses.cadastrarHorario()
      if (response.status) {
        this.$refs.calendario.getApi().addEvent({
          title: response.content.nome,
          start: event.date
        })
        Responses.sucessoToast('Horário marcado')
      }
    },
    async desmarcarHorario(data) {
      try {
        const value = await Responses.pedirConfirmacao("Desmarcar horário ?")
        if(value){
          data.event.remove()
          Responses.sucessoToast('Horário removido')
        }
      } catch (err) {
        Responses.erro()
      }
    }
  }
}
</script>
<template>
  <div class="d-flex flex-column p-4">
    <Calendario :options="optionsCalendario" ref="calendario" />
  </div>
</template>

<style>
.fc-col-header-cell-cushion {
  text-decoration: none;
  color: black;
}
.fc-scrollgrid-shrink-cushion {
  color: black;
}
.fc-timegrid-slot {
  height: 3.5rem !important;
}
</style>
