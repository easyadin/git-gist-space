import { Octokit } from '@octokit/rest';

export const client = new Octokit();

export const authUrl = await client.auth({
  clientId: 'Iv1.9d0fc0f7ab42fb52',
  scope: 'repo,user',
  allowSignup: true,
});

