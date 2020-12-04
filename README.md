# GCP Simple Secrets

This is a library that takes in the location of a GCP secret from Google's Secret Manager and a name of an environment variable. If `process.env.NODE_ENV === 'production'` then `getSecret()` attempts to retrieve the secret from the Secret Manager service, otherwise it looks for the environment variable. If either come back undefined then the function throws.

## Installation

```
$ npm install gcp-simple-secrets
```

## Usage

```js
import { getSecret } from 'gcp-simple-secrets';

// ...

const apiKey = await getSecret('projects/123/secrets/api_key/versions/1', 'API_KEY');
```
