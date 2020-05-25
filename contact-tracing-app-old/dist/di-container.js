"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var dependencies_1 = require("./dependencies");
var DIContainer = new inversify_1.Container();
DIContainer.bind(dependencies_1.DependencyA).toSelf();
DIContainer.bind(dependencies_1.DependencyB).toSelf();
exports.default = DIContainer;
