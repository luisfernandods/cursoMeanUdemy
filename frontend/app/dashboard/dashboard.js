(function () {
    angular.module('primeiraApp').controller('dashboardController', 
    ['$http', dashboardController]);

    function dashboardController($http) {
        // Como boa prática utilizamos o vm "ViewModel" referenciando ao this
        const vm = this;
        vm.getSummary = function () {
            const url = 'http://localhost:3003/api/billingSummary';
            return $http.get(url)
                .then(function (response) {
                    const { debit = 0, credit = 0 } = response.data;
                    vm.credit = credit;
                    vm.debit = debit;
                    vm.total = credit - debit;
                });
        };


        vm.getSummary();
    }
})();