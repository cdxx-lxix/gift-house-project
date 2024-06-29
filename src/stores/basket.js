import { defineStore } from "pinia";
import { ref, computed } from "vue";
import portrait from "../assets/items/portrait.png"
import whiskey from "../assets/items/whiskey.png"
import canteen from "../assets/items/canteen.png"
import bucket from "../assets/items/bucket.png"
import flashdrive from "../assets/items/flashdrive.png"
import glasses from "../assets/items/glasses.png"
import jar from "../assets/items/jar.png"
import lighter from "../assets/items/lighter.png"
import pipe from "../assets/items/pipe.png"

export const useBasketStore = defineStore("basket", () => {
  const basketItems = ref([{ "product": { "id": 1, "img": "/src/assets/items/portrait.png", "name": "Портрет \"Девушка\"", "price": "1 111 р." }, "amount": 1 }]);
  const addItem = (id) => {
    if (basketItems.value.some((el) => el.product.id == id)) {
      let temp = basketItems.value.findIndex((el) => el.product.id == id);
      increaseAmount(temp);
    } else {
      basketItems.value.push({ product: products[id], amount: 1 });
    }
  };

  const increaseAmount = (index) => {
    return basketItems.value[index].amount++;
  };

  const decreaseAmount = (index) => {
    if (basketItems.value[index].amount <= 1) {
      deleteItem(index);
    }
    return basketItems.value[index].amount--;
  };

  const deleteItem = (index) => {
    return basketItems.value.splice(index, 1);
  };

  const totalSum = computed(() => {
    return basketItems.value.reduce((accumulator, currentValue) => accumulator + currentValue.amount * currentValue.product.price, 0);
  });

  const clearBasket = () => {
    while(basketItems.value.length > 0) {
        basketItems.value.pop();
    }
  };

  const products = [
    {
      id: 0,
      img: glasses,
      name: "Набор для виски",
      price: "1 111 р.",
    },
    {
      id: 1,
      img: portrait,
      name: 'Портрет "Девушка"',
      price: "1 111 р.",
    },
    {
      id: 2,
      img: flashdrive,
      name: "Флешка-альбом",
      price: "1 111 р.",
    },
    {
      id: 3,
      img: jar,
      name: "Фитнес банка",
      price: "1 111 р.",
    },
    {
      id: 4,
      img: pipe,
      name: "Трубка",
      price: "1 111 р.",
    },
    {
      id: 5,
      img: whiskey,
      name: "Стакан для виски",
      price: "1 111 р.",
    },
    {
      id: 6,
      img: lighter,
      name: "Зажигалка",
      price: "1 111 р.",
    },
    {
      id: 7,
      img: canteen,
      name: "Фляга + рюмки",
      price: "1 111 р.",
    },
    {
      id: 8,
      img: bucket,
      name: "Ведро",
      price: "1 111 р.",
    }
  ];
  return {
    products,
    basketItems,
    addItem,
    increaseAmount,
    decreaseAmount,
    deleteItem,
    totalSum,
    clearBasket,
  };
});
