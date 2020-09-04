const toolTypes = ["wooden", "stone", "iron_ingot", "gold_ingot", "diamond", "netherite_ingot"]
const armorTypes = ["leather", "iron_ingot", "gold_ingot", "diamond"]

export default ({
  recipes: {
    crafting_table: [
      "x x x",
      "plank plank x",
      "plank plank x"
    ],
    bed: [
      "x x x",
      "wool wool wool",
      "plank plank plank"
    ],
    chest: [
      "plank plank plank",
      "plank x plank",
      "plank plank plank"
    ],
    boat: [
      "x x x",
      "plank x plank",
      "plank plank plank"
    ],
    stick: [
      "x x x",
      "x plank x",
      "x plank x"
    ],
    sign: [
      "plank plank plank",
      "plank plank plank",
      "x stick x"
    ],
    torch: [
      "x x x",
      "x coal x",
      "x stick x"
    ],
    ingot: [
      "nugget nugget nugget",
      "nugget nugget nugget",
      "nugget nugget nugget"
    ],
    furnace: [
      "stone stone stone",
      "stone x stone",
      "stone stone stone"
    ],
    fence: [
      "x x x",
      "plank stick plank",
      "plank stick plank"
    ],
    anvil: [
      "iron_block", "iron_block", "iron_block",
      "x iron_ingot x",
      "iron_ingot iron_ingot iron_ingot"
    ],
    book: [
      "x paper x",
      "x paper x",
      "x paper leather"
    ],
    enchanting_table: [
      "x book x",
      "diamond obsidian diamond",
      "obsidian obsidian obsidian"
    ],
    dispenser: [
      "cobblestone cobblestone cobblestone",
      "cobblestone bow cobblestone",
      "cobblestone redstone cobblestone"
    ],
    dropper: [
      "cobblestone cobblestone cobblestone",
      "cobblestone x cobblestone",
      "cobblestone redstone cobblestone"
    ],
    hopper: [
      "iron_ingot x iron_ingot",
      "iron_ingot chest iron_ingot",
      "x iron_ingot x"
    ],
    observer: [
      "cobblestone cobblestone cobblestone",
      "redstone redstone quartz",
      "cobblestone cobblestone cobblestone"
    ],
    lever: [
      "x x x",
      "x stick x",
      "x cobblestone x"
    ],
    pickaxe: {
      types: toolTypes,
      recipe: [
        "type type type",
        "x stick x",
        "x stick x"
      ]
    },
    axe: {
      types: toolTypes,
      recipe: [
        "type type x",
        "type stick x",
        "x stck x"
      ]
    },
    shovel: {
      types: toolTypes,
      recipe: [
        "x type x",
        "x stick x",
        "x stick x"
      ]
    },
    hoe: {
      types: toolTypes,
      recipe: [
        "type type x",
        "x stick x",
        "x stick x"
      ]
    },
    sword: {
      types: toolTypes,
      recipe: [
        "x type x",
        "x type x",
        "x stick x"
      ]
    },
    helmet: {
      types: armorTypes,
      recipe: [
        "x x x",
        "type type type",
        "type x type"
      ]
    },
    chest_plate: {
      types: armorTypes,
      recipe: [
        "type x type",
        "type type type",
        "type type type"
      ]
    },
    leggings: {
      types: armorTypes,
      recipe: [
        "type type type",
        "type x type",
        "type x type"
      ]
    },
    boots: {
      types: armorTypes,
      recipe: [
        "x x x",
        "type x type",
        "type x type"
      ]
    },
    fishing_rod: [
      "x x stick",
      "x stick string",
      "stick x string"
    ],
    flint_and_steel: [
      "x x x",
      "iron_ingot x x",
      "x flint x"
    ],
    shears: [
      "x x x",
      "x iron_ingot x",
      "iron_ingot x x"
    ],
    bucket: [
      "x x x",
      "iron_ingot x iron_ingot",
      "x iron_ingot x"
    ],
    compass: [
      "x iron_ingot x",
      "iron_ingot redstone iron_ingot",
      "x iron_ingot x"
    ],
    shield: [
      "plank iron_ingot plank",
      "plank plank plank",
      "x plank x"
    ],
    bow: [
      "string stick x",
      "string x stick",
      "string stick x"
    ],
    arrow: [
      "x flint x",
      "x stick x",
      "x feather x"
    ]
  },
  basics: [
    "crafting_table",
    "bed",
    "chest",
    "boat",
    "stick",
    "sign",
    "torch",
    "ingot"
  ],
  mechanisms: [
    "furnace",
    "fence",
    "anvil",
    "book",
    "enchanting_table",
    "dispenser",
    "dropper",
    "hopper",
    "observer",
    "lever"
  ],
  tools: [
    `[${toolTypes.join("|")}]_pickaxe`,
    `[${toolTypes.join("|")}]_axe`,
    `[${toolTypes.join("|")}]_shovel`,
    `[${toolTypes.join("|")}]_hoe`,
    "fishing_rod",
    "flint_and_steel",
    "shears",
    "bucket",
    "compass"
  ],
  defense: [
    `[${armorTypes.join("|")}]_helmet`,
    `[${armorTypes.join("|")}]_chest_plate`,
    `[${armorTypes.join("|")}]_leggings`,
    `[${armorTypes.join("|")}]_boots`,
    `[${toolTypes.join("|")}]_sword`,
    "shield",
    "bow",
    "arrow"
  ]
});
