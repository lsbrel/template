import Swal from 'sweetalert2'

export default class Responses {
  static async cadastrarHorario() {
    var response = {
      status: false,
      content: {
        nome: '',
        obs: ''
      }
    }

    await Swal.fire({
      html: `
        <div class="d-flex flex-column gap-2">
          <label>Nome</label>
          <input id="nome" class="form-control" type="text" placeholder="Nome ....." />
          <label>Observações</label>
          <textarea id="obs" class="form-control" rows="3" placeholder="Escreva uma observação" style="resize: none"></textarea>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: 'Marcar',
      confirmButtonColor: '#0D6EFD',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        return new Promise((resolve, reject) => {
          resolve({
            nome: document.getElementById('nome').value,
            obs: document.getElementById('obs').value
          })
        })
      }
    }).then((data) => {
      if (data.isConfirmed) {
        response = {
          status: true,
          content: {
            nome: data.value.nome,
            obs: data.value.obs
          }
        }
      }
    })

    return response
  }

  static async pedirConfirmacao(text){
    var response = false
    await Swal.fire({
      icon: 'question',
      animation: true,
      text: text,
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      confirmButtonColor: '#0D6EFD',
    }).then((data) =>{
      if(data.isConfirmed){
        response = true
      }
    })

    return response
  }

  static sucesso() {
    return Swal.fire({
      icon: 'success',
      animation: true
    })
  }

  static erro() {
    return Swal.fire({
      icon: 'error',
      animation: true
    })
  }

  static sucessoToast(text) {
    return Swal.mixin({
      icon: 'success',
      text: text,
      animation: true,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000
    }).fire()
  }
}
