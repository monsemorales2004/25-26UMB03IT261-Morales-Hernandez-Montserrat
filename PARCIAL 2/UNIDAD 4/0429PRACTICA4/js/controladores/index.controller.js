angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {

    $scope.formConsultaRuta = {
        fechaInicio: '',
        fechaFin: '',
        idProveedor: '',
        idAutomovil: '',
        idDriver: '',
        idRuta: '',
    }

    $scope.imprimirMensaje = () => {
        console.log($scope.formConsultaRuta);
    }

    $scope.optionsAutos =[
    {
    etiqueta: "Chevy",
    valor: 1
    },
     {
    etiqueta: "Tornado",
    valor: 2
    },
     {
    etiqueta: "Camaro",
    valor: 3
    },
     {
    etiqueta: "Suburban",
    valor: 4
    }
    ];

       $scope.optionDriver = [
      {
    etiqueta: "M",
    valor: 1
    },
     {
    etiqueta: "A",
    valor: 2
    },
     {
    etiqueta: "C",
    valor: 3
    },
     {
    etiqueta: "J",
    valor: 4
    }  
    ];

    $scope.optionProveedor =[
  {
    etiqueta: "JKL",
    valor: 1
    },
     {
    etiqueta: "LMD",
    valor: 2
    },
     {
    etiqueta: "MAH",
    valor: 3
    },
     {
    etiqueta: "AJL",
    valor: 4
    }  
    ]

}