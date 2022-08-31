import Swal from 'sweetalert2'

export const swal = () => {
    Swal.fire ({
        title : " Credenciales inválidas " ,
        text : " Por favor introduzca credenciales válidas " ,
        confirmButtonText : " Aceptar " ,
        width : " 400px " ,
        tiner : 10000 ,
        tinerprogressBar : true ,
     })
}
