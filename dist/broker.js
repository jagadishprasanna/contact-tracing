"use strict";
var KafkaRest = require('kafka-rest');
var kafka = new KafkaRest({ 'url': 'http://localhost:9092' });
kafka.topic('test').partition(0);
kafka.topicPartition('test', 0);
kafka.topic('test').produce('message');
// kafka.brokers is a Brokers instance, list() returns a list of Broker instances
kafka.brokers.list(function (err, brokers) {
    for (var i = 0; i < brokers.length; i++)
        console.log(brokers[i].toString());
});
