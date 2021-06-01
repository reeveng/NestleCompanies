import Country from "./countries.js";

const parentEnum = Object.freeze({
  IS_PARENT: Symbol("is parent")
});

const Tag = Object.freeze({
  BEVERAGE: Symbol("beverage"),
  COFFEE: Symbol("coffee"),
  WATER: Symbol("water"),
  CEREALS: Symbol("cereals"),
  CHILLED: Symbol("chilled"),
  DRINK: Symbol("drink"),
  CHOCOLATE: Symbol("chocolate"),
  CONFECTIONERY: Symbol("confectionery"),
  BAKED: Symbol("baked"),
  FOODSERVICE: Symbol("foodservice"),
  FROZEN: Symbol("frozen"),
  DESSERT: Symbol("dessert"),
  HEALTHCARE: Symbol("healthcare"),
  NUTRITION: Symbol("nutrition"),
  INSTANT: Symbol("instant"),
  PERFORMANCE: Symbol("performance"),
  PETCARE: Symbol("petcare"),
  PET: Symbol("pet"),
  REFRIGERATED: Symbol("refrigerated"),
  SEASONING: Symbol("seasoning"),
  SHELF: Symbol("shelf"),
  YOGURT: Symbol("yogurt"),
  FOOD: Symbol("food"),
  TEA: Symbol("tea")
})

export default [
  {
    "id": "1",
    "name": "Nestle",
    "countries_of_operation": [Country.Belgium],
    "parent_company": parentEnum.IS_PARENT
  },
  {
    "id": "2",
    "name": "Garoto",
    "countries_of_operation": [Country.Brazil],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "3",
    "name": "Nestle India",
    "countries_of_operation": [Country.India],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "4",
    "name": "Nestle Japan",
    "countries_of_operation": [Country.Japan],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "5",
    "name": "Gerber Products Company",
    "countries_of_operation": [Country.UnitedStates],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "6",
    "name": "Nestle Purina PetCare Company",
    "countries_of_operation": [Country.UnitedStates, Country.Belgium],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "7",
    "name": "Garden Gourmet",
    "countries_of_operation": [Country.Belgium],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "8",
    "name": "Nestle Pakistan",
    "countries_of_operation": [Country.Pakistan],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "9",
    "name": "Blue Bottle Coffee Company",
    "countries_of_operation": [Country.UnitedStates],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "10",
    "name": "Nestle Nigeria",
    "countries_of_operation": [Country.Nigeria],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "11",
    "name": "Osem Investments Ltd.",
    "countries_of_operation": [Country.Israel],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "12",
    "name": "Rowntrees",
    "countries_of_operation": [Country.UnitedKingdom],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "13",
    "name": "Nestle Waters",
    "countries_of_operation": [Country.France],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "",
    "name": "Carnation",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": [],
    "tags": []
  },
  {
    "id": "",
    "name": "Caro / Pero",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "",
    "name": "(cocoa) D'Onofrio",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  },
  {
    "id": "",
    "name": "Enviga",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Libbys",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Milo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nescau",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nesquik",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestea",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ovaltine",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ricacao",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Romanette",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Special. T",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Supligen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sweet Leaf Tea",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Peace Iced Tea",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Bonka",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Buondi",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Charmeleon Cold Brew",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Christina",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Dolca",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Dolce Gusto",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ecco",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "El Chana",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "International Roast",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Kirma",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Loumidis",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Mountain Blend",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nescafe",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nespresso",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Partners Blend",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ricoffy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ricore",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ristretto",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sical",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Starbucks",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sunrise",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Tasters Choice",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Tofa",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Zoegas",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Acqua Panna",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Alacam",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Aqua Mineral",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Aqua Pod",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Aqua Spring",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Aquarel",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Arctic",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Baraka",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Buxton",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Charmoise",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ciego Montero",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Contrex",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cristalp",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Da Shan YunNan Spring",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Dar Natury",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Eco de los Andes",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Erikli",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Frische Brise",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Gerber",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ghadeer",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Glaciar",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Henniez",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Hepar",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Hidden Spring",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Korpi",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "La Vie",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Levissima",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Los Portales",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Minere",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Naleczowianka",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Selda",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Vera",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Neuselters",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Pejo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Perrier",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Petropolis",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Plancoet",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Porvenir",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Princes Gate",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Quezac",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Recoaro",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Saint-Lambert",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sainte-Alix",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "San Pellegrino",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Santa Barbara",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Santa Maria",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sao Lourenco",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sohat",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Springs",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Valvert",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Viladrau",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Vittel",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Water Line",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Waterman",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": [Tag.WATER]
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  },
]
