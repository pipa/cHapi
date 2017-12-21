// pm2 install pm2-logrotate
// pm2 set pm2-logrotate:max_size 10M

module.exports = {
  apps : [
    {
      name: 'cHapi',
      script: 'index.js',
      cwd: './',
      exec_mode: 'cluster',
      watch: true,
      // ignore_watch: ['node_modules'],
      watch_options: {
        usePolling: true,
        alwaysStat: true,
        useFsEvents: false,
        depth: 100
      },
      env: {
        PORT: 9999,
        NODE_ENV: 'dev'
      },
      env_testing: {
        PORT: 80,
        NODE_ENV: 'tst'
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'prd'
      }
    }
  ]
};
