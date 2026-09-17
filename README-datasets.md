# Dataset - E-commerce Analytics

Ces fichiers JSON sont fournis pour le mini-chantier JavaScript DOM & Data.

## Fichiers

- `products.json` : 60 produits.
- `customers.json` : 35 clients.
- `orders.json` : 120 commandes.

## Relations entre fichiers

- `orders.customerId` correspond a `customers.id`.
- `orders.items[].productId` correspond a `products.id`.
- `orders.items[].unitPrice` garde le prix au moment de la commande.

## Coherence des donnees

- Tous les `customerId` utilises dans `orders.json` existent dans `customers.json`.
- Tous les `productId` utilises dans `orders.json` existent dans `products.json`.
- Une commande contient toujours entre 1 et 4 produits.
- Pour les calculs de chiffre d'affaires, utilisez `unitPrice` dans `orders.json`.
- Ne modifiez pas les `id` des produits, clients ou commandes pendant les exercices.

## Statuts de commande

- `delivered`
- `pending`
- `cancelled`
- `returned`

## Segments clients

- `new`
- `regular`
- `vip`

## Conseil

Commencez par charger et afficher `products.json`. Les fichiers `orders.json` et `customers.json` servent ensuite aux KPI et aux challenges.
