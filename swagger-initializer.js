window.onload = function() {
  const ui = SwaggerUIBundle({
    url: "api-docs.yaml",  // <-- Ensure this matches your file name
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
    plugins: [SwaggerUIBundle.plugins.DownloadUrl],
    layout: "StandaloneLayout"
  });
  window.ui = ui;
};
