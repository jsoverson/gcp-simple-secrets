import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
const client = new SecretManagerServiceClient();

export async function getSecret(secretsString: string, envVarName: string): Promise<string> {
  if (process.env.NODE_ENV === 'production') {
    const [secret] = await client.accessSecretVersion({
      name: secretsString,
    });
    if (!secret.payload || !secret.payload.data) throw new Error(`Can not get secret: ${secretsString}`);
    return secret.payload.data.toString();
  } else {
    const secret = process.env[envVarName];
    if (secret === undefined) throw new Error(`Can not get environment variable: ${envVarName}`);
    return secret;
  }
}
