package main

import (
	"github.com/labstack/echo/v4"
)

func (app *application) Home(c echo.Context) error {
	return c.String(200, app.Domain)
}
