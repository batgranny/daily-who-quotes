output "static_web_app_url" {
  value       = azurerm_static_web_app.app.default_host_name
  description = "The URL of the static web app. (It might take a few minutes to be fully available after deployment)"
}

output "deployment_token" {
  value       = azurerm_static_web_app.app.api_key
  description = "The deployment token for GitHub Actions. Add this as a repository secret named AZURE_STATIC_WEB_APPS_API_TOKEN in GitHub."
  sensitive   = true
}
