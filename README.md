# a very smol minecraft info api

### Recipes

```sh
GET /api/recipes/:itemname
```

Returns JSON
```json
{ recipe: [ requested_item_recipe ] }
```

### Lists

Returns an array of strings representing item names of that category

Basic Items

```sh
GET /api/basics
```

Defense Items

```sh
GET /api/defense
```

Mechanisms

```sh
GET /api/mechanisms
```

Tools

```sh
GET /api/tools
```
