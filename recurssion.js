let data = [
  {
    id: "0001",
    type: "donut",
    name: "Cake",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
        { id: "1003", type: "Blueberry" },
        { id: "1004", type: "Devil's Food" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5007", type: "Powdered Sugar" },
      { id: "5006", type: "Chocolate with Sprinkles" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0002",
    type: "donut",
    name: "Raised",
    ppu: 0.55,
    batters: {
      batter: [{ id: "1001", type: "Regular" }],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5005", type: "Sugar" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
  {
    id: "0003",
    type: "donut",
    name: "Old Fashioned",
    ppu: 0.55,
    batters: {
      batter: [
        { id: "1001", type: "Regular" },
        { id: "1002", type: "Chocolate" },
      ],
    },
    topping: [
      { id: "5001", type: "None" },
      { id: "5002", type: "Glazed" },
      { id: "5003", type: "Chocolate" },
      { id: "5004", type: "Maple" },
    ],
  },
];

const rec1 = (data) => {
  for (prop in data) {
    if (Array.isArray(data[prop]) || typeof data[prop] === "object") {
      return rec1(data[prop]);
    }
    console.log(prop + "=" + data[prop]);
  }
};
console.log(data.forEach((item) => rec1(item))); //True

const recFac = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recFac(n - 1);
};

console.log("recFac: ", recFac(5));
console.log("recFac: ", recFac(1));
console.log("recFac: ", recFac(0));

const recFib = n => {
  if(n <= 1) return n
  return recFib(n - 1) + recFib(n - 2) 
}
console.log("recFib:", recFib(6));
console.log("recFib:", recFib(1));
console.log("recFib:", recFib(0));