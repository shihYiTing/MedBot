const cfg = {
    MQ_URL: 'mqtt://120.126.18.132',
    MQ_OPTION: { port: 1883 },
    MQ_SUB_TOPIC_LIST: ["TopicA", "TopicB", "dialogflow_input"],
    DIAGFLOW_PROJECT_ID: "test1-basn",
    MONGODB_ConnectionString: "mongodb://120.126.18.131:27027"
}

module.exports = { cfg }