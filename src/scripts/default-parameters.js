// Параметры по-умолчанию
// (Default Parameters)

// function f( a = 10, b = 20 ) {}
// Устанавливаются, если не передать значение (или передать undefined)
// Чаще всего идут последними в списке
// Могут иметь любой тип

function fetchOrders(count = 10, start = 0) {
  console.log("Getting", count, "orders starting from", start);
}

fetchOrders();

function findProducts(opts = { minPrice: 10, maxPrice: 20 }) {
  console.log(opts);
}

// Если мы передадим объект, даже пустой, то значения по-умолчанию не будут смешиваться
// findProducts({});
findProducts();
