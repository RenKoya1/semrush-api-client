# semrush-api-client
[![Version badge](https://img.shields.io/github/v/release/RenKoya1/semrush-api-client?include_prereleases)](https://github.com//RenKoya1/semrush-api-client)

A Node.js/TypeScript client for accessing the SEMrush API easily.

## Installation

```sh
npm install semrush-api-client
```

## Usage Example

First, set your SEMrush API key in your environment variables (e.g., in a `.env` file):

```
SEMRUSH_API_KEY=your_api_key_here
```

Then, use the client in your code:

```ts
import { SemrushAPIClient } from "semrush-api-client";
const client = new SemrushAPIClient({
  api_key: process.env.SEMRUSH_API_KEY!,
});

// Get domain rank
client.getDomainRank({ domain: "apple.com" });

// Get keyword data
client.getPhrase({ phrase: "apple" });
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## License

See [LICENSE](LICENSE).
