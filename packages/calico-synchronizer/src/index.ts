import Synchronizer from './synchronizer';

new Synchronizer().run().catch((e) => {
  console.error(e);
  process.exit(1);
});
