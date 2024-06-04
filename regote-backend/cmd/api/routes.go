package main

import (
	"github.com/labstack/echo/v4"
)

func initializeRoutes(e *echo.Echo, app *application) {
	e.GET("/", app.Home)
	e.GET("/companies", app.AllCompanies)
}
