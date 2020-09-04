# a very smol minecraft info api


### Recipes

```sh
GET /api/recipes/:itemname
```

Supported items by name:

- bed
- crafting_table


Outputs/returns a 3x3 grid representing the recipe, for example:

```sh
[     ] [     ] [     ]
[plank] [plank] [     ]
[plank] [plank] [     ]
```
