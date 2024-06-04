package main

import (
	"encoding/json"
	"github.com/labstack/echo/v4"
	"log"
	"net/http"
	"regote-backend/internal/models"
	"time"
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

func (app *application) AllCompanies(c echo.Context) error {
	var companies []models.Company

	rd, _ := time.Parse("2006-01-02", "1995-12-26")

	acmeco := models.Company{
		ID:         1,
		Name:       "Acme Co.",
		DateAdded:  rd,
		PrimaryPOC: "Jane Doe",
		Notes: []models.Note{
			{
				NoteId:       101,
				Title:        "Initial Meeting",
				Body:         "Discussed project requirements and timelines.",
				CreatedAt:    time.Now(),
				UpdatedField: time.Now(),
			},
			{
				NoteId:       102,
				Title:        "Follow-up",
				Body:         "Reviewed project progress and addressed any concerns.",
				CreatedAt:    time.Now().AddDate(0, 0, -7),
				UpdatedField: time.Now(),
			},
		},
	}
	slamco := models.Company{
		ID:         1,
		Name:       "Slam Co.",
		DateAdded:  rd,
		PrimaryPOC: "Blago Bill",
		Notes: []models.Note{
			{
				NoteId:       103,
				Title:        "Initial Meeting",
				Body:         "Discussed project requirements and timelines.",
				CreatedAt:    time.Now(),
				UpdatedField: time.Now(),
			},
			{
				NoteId:       104,
				Title:        "Follow-up",
				Body:         "Reviewed project progress and addressed any concerns.",
				CreatedAt:    time.Now().AddDate(0, 0, -7),
				UpdatedField: time.Now(),
			},
		},
	}

	companies = append(companies, acmeco, slamco)

	out, err := json.Marshal(companies)
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
