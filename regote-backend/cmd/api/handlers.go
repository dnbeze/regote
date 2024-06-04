package main

import (
	"encoding/json"
	"github.com/labstack/echo/v4"
	"log"
	"net/http"
)

func (app *application) Home(c echo.Context) error {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "regote is up and running",
		Version: "0.0.1",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		log.Fatal(err)
	}

	c.Response().Header().Set("Content-Type", "application/json")
	c.Response().WriteHeader(http.StatusOK)
	_, err = c.Response().Write(out)
	if err != nil {
		return err
	}
	return nil
}
