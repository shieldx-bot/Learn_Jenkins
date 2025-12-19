// tracing.js
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');

// Cấu hình bắn Trace về Jaeger trong K8s
const traceExporter = new OTLPTraceExporter({
    url: 'http://jaeger.monitoring.svc.cluster.local:4317', // Đường dẫn nội bộ K8s
});

const sdk = new NodeSDK({
    traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
    serviceName: 'backend-nodejs-service', // Tên service sẽ hiện trên Jaeger
});

sdk.start();
console.log('Tracing initialized');