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
  TEA: Symbol("tea"),
  MAKEUP: Symbol("make-up"),
  PROFESSIONAL: Symbol("professional"),
  CONSUMER: Symbol("consumer"),
  INEDIBLE: Symbol("inedibles")
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
    "name": "(cocoa) D Onofrio",
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
    "name": "SaintLambert",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "SainteAlix",
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
    "name": "Cerevita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cerelac",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cheerios",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chocapic",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cini Minis",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Clusters",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cookie Crisp",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Curiously Strawberry",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Curiously Cinnamon",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Estrelitas",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Fitness",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Force Flakes",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Gold Flakes",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Golden Grahams",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Golden Morn",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Golden Nuggets",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Honey Stars",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Koko Krunch",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Lion Cereal",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Milo Cereals",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nescau Cereal",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nesquik Breakfast Cereal",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Corn Flakes",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Shredded Wheat",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Shreddles",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "TRIO Cereal",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Uncle Tobys",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chamyto",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chambinho",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chandelle",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chiquitin",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Club",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Hirz",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "La Laitiere",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "La Lechera",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "LC1",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Le Viennois",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Moca",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Molico",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Munch",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nesvita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ninho",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ski",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sollys",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sveltesse",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Svelty",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Yoco",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Abuelita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Aero",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "After Eight",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "All Stars",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Allens",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Alpia",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Alpino",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Animal Bar",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Bertie Beetle",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Besos de Moza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Big Turk",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Black Magic",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Blue Riband",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Boci",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Bono",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Bon Pari",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Breakaway",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cailler",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Capri",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Caramac",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Carlos V",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Charge",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chips Ahoy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Choclait Chips",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Choco Crossies",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chocolate Surpresa",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Chokito",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cocosette",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Coffee Crisp",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Crunch",
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
    "name": "Dairy Box",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Damak",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Drifter",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Fizzfindle",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Frigor",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Galak/Milkybar",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Heaven",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Hercules Bars",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Joe",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Joff",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "JOJO",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Kit Kat",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Lion",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Lollo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Mabels",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cracker",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cremositas",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Gauchitas",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Maria Maizena",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Moraditas",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Rosquitas",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Salvado",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "TOP",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Wafer",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Yapita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Matchmakers",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Milky Bar",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Mio",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Minties",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Mirage",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Moça",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Munch",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Munchies",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Negresco",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Negrita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Aero",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Alpine White",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Candy Shop",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Classic",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Dessert",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Milk Chocolate",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Princessa",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle with Almonds",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Wonder Ball",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Yes",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nuts",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Orion",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Passatempo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Peppermint Crisp",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Perugina Baci",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Plaistowe",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Polo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Prestígio",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Princessa",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Quality Street",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Rolo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Rowntrees",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Fruit Gums",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Fruit Pastilles",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Jelly Tots",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Juicy Jellies",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Pick & Mix",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Randoms",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Tooty Frooties",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sahne Nuss",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Scorched Almonds",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sensação",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Smarties",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Suflair",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sublime",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sundy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Super 8",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Susy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Svitoch",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Szerencsi",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Tango",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Tango Mini Galletas",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Texan Bar",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Toffee Crisp",
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
    "name": "Nestle Toll House cookies",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Trencito",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Triangulo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Turtles",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Walnut Whip",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "XXX mints",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Yorkie",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "ChefMate",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Davigel",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Minors",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Santa Rica",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Buitoni",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "California Pizza Kitchen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Delissio Pizza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "DiGiorno Pizza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Hot Pockets",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Halsans Kok",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Jacks Pizza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Lean Cuisine",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Lean Pockets",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Papa Giuseppe",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Stouffers",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sweet Earth Foods",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Tombstone Pizza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Wagner Pizza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Frozen desserts",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ahusglass",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Aino",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Camy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "DOnofrio",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Делта",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Δέλτα",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestle Dibs",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Dreyer's",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Drumstick",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Eskimo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Frigor",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Frisco",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Froneri",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Kimo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Kimy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Maxibon",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Mat Kool",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Mivvi",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Motta",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Movenpick",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestlé Drumstick",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestlé Ice Cream",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nestlé Princessa",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Oreo Frozen Dessert Sandwiches",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Outshine",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Pingviini",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "PushUp",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Real Dairy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Savory",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Schöller",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Skinny Cow",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sorbetes",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Temptations",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Underground is",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "zer0% Fat",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Boost",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Carnation Instant Breakfast",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Compleat",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Crucial",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Diabetisource",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Fibersource",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Garden of Life",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Glytrol",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Impact",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Isosource",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Meritene",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Modulen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Atrium Innovations",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Douglas Laboratories",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Genestra brands",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Novasource Renal",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Nutren",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Optifast",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Optifibre",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Peptamen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Persona Nutrition",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Pure Encapsulations",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Resorb",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Resource",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sustagen",
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
    "name": "Trophic",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Wobenzym",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Alfare",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Beba",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Cerelac",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Bona",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Farinha Láctea",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "FM 85",
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
    "name": "Good Start",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Guigoz",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Lactogen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nan",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "NAN HA",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "NanSoy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "NaturNes",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Neslac",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nestlé",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nestlé Bear Brand",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nestogen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nestum",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nido",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Piltti",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "PreNan",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "SMA",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Wyeth",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Neston",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nesvita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Pria",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Supligen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Bakers",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Petcare",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Beta",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Bonio",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Bonnie",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Castor & Pollux",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Chef Michael's Canine Creations",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Felix",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Fido",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Go Cat",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Gourmet",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Lily's Kitchen",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Lucky Dog",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Merrick",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Mon Petit",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "PetLife",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Purina",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Supercoat",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Tails",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Tidy Cats",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Totalcare",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Whole Earth Farms",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Winalot",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nestlé Purina petcare products",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Alpo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Purina Beggin' Strips",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Busy Bone",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Beneful",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Cat Chow",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Dog Chow",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Fancy Feast",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Friskies",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Mighty Dog",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Purina",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Purina ONE",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Purina Pro Plan",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Buitoni",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Herta",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Katie's Pizza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Toll House",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "CHEF",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Carpathia",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Thomy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Haoji",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Maggi",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Totole",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Winiary",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Carnation",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "CoffeeMate",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Milo",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nestlé Omega Plus",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Tendre Noix",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Acti-V",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "ActiPlus",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Fruit Selection Yogurt",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Hirz",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Longa Vida",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Molico",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Munch Bunch",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Nestlé Raita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Rawaytee Maza",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Ski",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Sweet N Tasty Yogurt",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Yelly",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "L'Oréal",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Urban Decay",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Lancôme",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Maybelline",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Garnier",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "L'Oréal Technique",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "L'Oréal Professionnel",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "ARTec",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Innate",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "L'Oreal",
    "countries_of_operation": [],
    "parent_company": parentEnum.IS_PARENT,
    "tags": []
  }, , {
    "id": "",
    "name": "Kérastase",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Kéraskin Esthetics",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Matrix Essentials",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Mizani",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "PureOlogy Research",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Redken 5th Avenue NYC",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Shu Uemura Art of Hair",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Carol's Daughter",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Carita",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Essie",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Decléor",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Botanicals Fresh Care",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Cheryl's Cosmeceuticals",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "L'Oreal Luxe",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Lancôme",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Yves Saint Laurent Beauté",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Giorgio Armani Beauty",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Kiehl's",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Diesel",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Biotherm",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Cacharel",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Viktor & Rolf",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Ralph Lauren Fragrances",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Shu Uemura",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Clarisonic",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Guy Laroche",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Paloma Picasso",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Urban Decay",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Yue Sai",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Helena Rubinstein",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "IT Cosmetics",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "House 99",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Atelier Cologne",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Proenza Schouler",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Valentino",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "L'Oréal Paris",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Color&Co",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Ombrelle",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Garnier",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, , {
    "id": "",
    "name": "Maybelline",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "NYX Cosmetics",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "SoftSheen-Carson",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Carol's Daughter",
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
    "name": "Créateurs de Beauté",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Essie",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Magic",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Niely",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Colorama",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "3ce",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Vichy",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "La Roche-Posay",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Skinceuticals",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Roger&Gallet",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Sanoflore",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Dermablend",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "AcneFree",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Ambi",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "CeraVe",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  }, {
    "id": "",
    "name": "Logocos since 2018",
    "countries_of_operation": [],
    "parent_company": 1,
    "tags": []
  },
]
