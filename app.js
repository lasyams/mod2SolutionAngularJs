(function () {
 'use strict';

 angular.module('ShoppingListApp',[])
 .controller('ShoppingListBuyController', ShoppingListBuyController)
 .controller('ShoppingListBoughtController', ShoppingListBoughtController)
 .service('ShoppingListService', ShoppingListService);

 ShoppingListBuyController.$inject = ['ShoppingListService'];
 function ShoppingListBuyController(ShoppingListService) {
   var list1 = this;

     list1.buyItems = ShoppingListService.getBuyItems();
     list1.buyingItem = function (index) {
     ShoppingListService.buyingItem(index);
   }
  }

ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService) {
  var list2 = this;

  list2.boughtItems = ShoppingListService.getBoughtItems();

  }


function ShoppingListService(){
  var service = this;

  var buyItems = [
    {
      name: "Chocolate",
      quantity: 10
    },
    {
      name: "Fruits",
      quantity: 20
    },
    {
      name: "Veggies Salad",
      quantity: 30
    },
    {
      name: "Cookies",
      quantity: 15
    },
    {
      name: "Ice cream",
      quantity: 25
    }
  ];

  var boughtItems = [];

  service.buyingItem = function (index) {
    boughtItems.push(buyItems[index]);
    buyItems.splice(index,1);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}


})();
