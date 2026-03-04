variable "resource_group_name" {
  type        = string
  description = "The name of the resource group"
  default     = "rg-daily-who-quotes"
}

variable "location" {
  type        = string
  description = "The Azure Region to deploy to (Static web apps are only available in specific regions like eastus2, centralus, westeurope, etc.)"
  default     = "eastus2"
}

variable "app_name" {
  type        = string
  description = "The name of the static web app"
  default     = "stapp-daily-who-quotes"
}
