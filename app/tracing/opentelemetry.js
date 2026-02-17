const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { ConsoleSpanExporter } = require('@opentelemetry/sdk-trace-base');

// Skip starting OpenTelemetry during tests to avoid interfering with Jest
if (process.env.NODE_ENV === 'test') {
  // Provide a minimal noop SDK shape so requiring this file is safe in tests
  // eslint-disable-next-line no-console
  console.log('OpenTelemetry initialization skipped in test environment');
  module.exports = {
    start: () => {},
    shutdown: () => {},
  };
} else {

// Use ConsoleSpanExporter by default so tracing works without external collector.
// To use OTLP exporter, set environment variable `OTLP_EXPORTER=otlp` and
// `OTLP_ENDPOINT` to the collector endpoint (e.g. http://localhost:4318).
function createSdk() {
  const traceExporter = new ConsoleSpanExporter();

  const sdk = new NodeSDK({
    traceExporter,
    instrumentations: [getNodeAutoInstrumentations()],
  });

  return sdk;
}

  const sdk = createSdk();

  if (typeof sdk.start === 'function') {
    sdk.start()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('OpenTelemetry initialized');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Error starting OpenTelemetry', err);
      });

    process.on('exit', () => {
      try {
        if (typeof sdk.shutdown === 'function') sdk.shutdown();
      } catch (e) {
        // ignore
      }
    });
  }

  module.exports = sdk;
}
