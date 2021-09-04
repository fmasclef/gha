/**
 * id
 *
 * An OAuth2 compliant AAA server
 */

import cluster, { Worker } from 'cluster';

import app from './server/app';

/**
* Start server in a clustered world
*/
if (cluster.isMaster) {
  // Name main process so that SIGINT will work
  process.title = process.argv[2];

  console.log('server started');

  // Let's fork
  const cpuCount = 2;
  console.log('forking 2 workers');
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  // handle dying workers
  cluster.on('exit', (worker :Worker) => {
    console.log('worker '+worker.id+' died, forking');
    cluster.fork();
  });
} else {
  // Spawn a child process, force IPv4
  app.set('port', 8000);
  app.listen(8000, '0.0.0.0');
}
 