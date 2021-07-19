# arcus-js

[![NPM version](https://img.shields.io/npm/v/@acid-tango/arcus-js.svg)](https://www.npmjs.com/package/@acid-tango/arcus-js)
[![CI](https://github.com/acidtango/arcus-js/actions/workflows/main.yaml/badge.svg)](https://github.com/acidtango/arcus-js/actions/workflows/main.yaml)

Arcus TypeScript client library for [Arcus API v3.x](https://docs.arcusfi.com/api/3.mx/endpoints/)

## Installation

```bash
npm install --save @acid-tango/arcus-js
# or
yarn add @acid-tango/arcus-js
```

## Usage

- [Authentication](#authentication)
- [Account](#account)
- [Billers](#billers)
- [Payment](#payment)
- [Transactions](#transactions)

### Authentication

```typescript
import { Arcus } from '@acid-tango/arcus-js';

const arcusClient = Arcus.create(
    process.env.ARCUS_API_KEY as string,
    process.env.ARCUS_SECRET_KEY as string,
  );
```

### Get account info

Returns all the info about your account.

```typescript
const account = await arcusClient.getAccount()
```

### Billers methods

Return all billers:

```typescript
const allBillers = await arcusClient.getBillers()
```

Return billers by type:

```typescript
const utilities = await arcusClient.getBillersUtilities()
const topUps = await arcusClient.getBillersTopUps()
const giftCards = await arcusClient.getBillersGiftCards()
```

### Payment

```typescript
// Creates a single payment and returns the created transaction
const singlePayParams: ArcusSinglePayParams = {...}

const transaction = await arcusClient.singlePay(singlePayParams)
```

### Transactions

Get a transaction by id:

```typescript
const transaction = await arcusClient.getTransaction(transactionId)
```

Cancel a transaction by id:

```typescript
await arcusClient.cancelTransaction(transactionId)
```
### How to do a release

1. Update the changelog
    ```
      yarn release
    ```
2. Delete the tag created by the release script
3. Create a PR
4. Merge to main with `rebase and merge` button to avoid merge commit.
5. Create a tag starting with "v". example `v0.0.6`
6. Push the tag
7. Create a release
8. Wait for ci to automatically publish.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'feat: Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## 📲 Contact

The project was mainly developed by [Abel García](mailto:abelgarcia@acidtango.com), [Aarón Pérez](mailto:aaron@acidtango.com), [Daniel Ramos](mailto:danielramos@acidtango.com) and [Daniel Gak](mailto:danielgak@acidtango.com) from [Acid Tango](https://acidtango.com/) with ❤️ and 💪 for [Rabbit](https://www.rabbitmx.com/).

## License

[MIT](LICENSE)
