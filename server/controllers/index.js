/** @format */

const fs = require('fs'),
    path = require('path'),
    baseFileName = path.basename(__filename),
    controllers = {};

fs.readdirSync(__dirname)
    .filter(file => {
        return (
            file.endsWith('.js') &&
            !file.endsWith('.test.js') &&
            file !== baseFileName
        );
    })
    .forEach(controllerFile => {
        const filePath = path.join(__dirname, controllerFile);
        const router = require(filePath);
        controllers[controllerFile.slice(0, controllerFile.length - 3)] =
            router;
    });

module.exports = controllers;
