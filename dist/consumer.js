"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kafka_typescript_1 = require("kafka-typescript");
var rdkafka = require("node-rdkafka");
var rdkafkaConsumer = rdkafka.KafkaConsumer;
var consumerConfig = new kafka_typescript_1.ConsumerConfig("localhost", "9092", "hello-world-group");
var consumer = new kafka_typescript_1.SimpleConsumer()
    .create(rdkafkaConsumer, ["hello-world"], consumerConfig)
    .onMessage(function (_a) {
    var topic = _a.topic, key = _a.key, value = _a.value;
    return console.log("Recieved", topic.toString(), key.toString(), value.toString());
})
    .connect();
