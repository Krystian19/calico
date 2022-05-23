#!/bin/sh

# Install dependencies
yarn workspace @calico/synchronizer install

# Wait for the dependencies to be available
/opt/bin/wait-for-it.sh calico.postgres:5432 --timeout=0

# # Run migrations
# yarn migrate

# # Generate the prisma types
# yarn generate

# Run the process
yarn synchronizer-start
