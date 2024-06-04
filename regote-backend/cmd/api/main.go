package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
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
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/", hello)

	e.Logger.Fatal(e.Start(port))

}
