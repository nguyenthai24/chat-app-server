module.exports = {
    apps: [
        {
            name: 'server',
            script: './server.js',
            env: {
                PORT: 5000,
                NODE_ENV: 'development',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
};
