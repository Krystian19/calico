import { PrismaClient } from '@prisma/client';

let client: PrismaClient;

export function createClient(): PrismaClient {
  if (!client) {
    client = new PrismaClient();
  }

  return client;
}
