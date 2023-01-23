import Pepperoni from "../assets/pepperoni.jpg";
import Margherita from "../assets/margherita.jpg";
import PedroTechSpecial from "../assets/pedrotechspecial.jpg";
import Vegan from "../assets/vegan.jpg";
import Pineapple from "../assets/pineapple.jpg";
import Expensive from "../assets/expensive.jpg";
import { AddAlarm } from "@material-ui/icons";

export const MenuList = [
  {
    name: "Pepperoni Pizza",
    image: Pepperoni,
    price: 15.99,
    nameStore:"AAA",
  },
  {
    name: "Margherita Pizza",
    image: Margherita,
    price: 11.99,
    nameStore:"BBB",
  },
  {
    name: "PedroTech Special Pizza",
    image: PedroTechSpecial,
    price: 256.53,
    nameStore:"GGG",
  },
  {
    name: "Vegan Pizza",
    image: Vegan,
    price: 17.99,
    nameStore:"CCC",
  },
  {
    name: "Pineapple Pizza",
    image: Pineapple,
    price: 4.99,
    nameStore:"DDD",
  },
  {
    name: "Very Expensive Pizza",
    image: Expensive,
    price: 1997.99,
    nameStore: AddAlarm,
    nameStore:"EEE",
  },
];
