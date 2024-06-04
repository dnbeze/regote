package main

import (
	"github.com/labstack/echo/v4"
)

const port = ":8080"

type application struct {
	Domain string
}

func main() {

	//TODO set app config
	var app application
	//TODO set env vars

	//TODO read from command line
	//TODO connect to database

	app.Domain = "example.com"
	//TODO start a web server

	e := echo.New()
	initializeMiddleware(e)
	initializeRoutes(e, &app)

	e.Logger.Fatal(e.Start(port))

}
