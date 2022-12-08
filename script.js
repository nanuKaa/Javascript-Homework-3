//1

const Func = (num1, num2, ...num3) => {
  let mutliply = 1;
  const sum = num1 + num2;
  for (const num of num3) {
    mutliply *= num;
  }
  return [sum, mutliply];
};
console.log(Func(1, 2, 3, 4, 5, 6, 7)); //3, 2520

//2
const users = {
  banks: ["user1", "user2", { address: { city: "Tbilisi" } }],
};

const {
  banks: [
    ,
    ,
    {
      address: { city },
    },
  ],
} = users;
console.log(city); // Tbilisi

//3
const user1 = {
  name: "Nanuka",
  address: {
    country: "Georgia",
    city: "Tbilisi",
  },
};

const user2 = { ...user1 };
user2.address.city = "Kareli";

console.log(user1.name, user2.address.city);
