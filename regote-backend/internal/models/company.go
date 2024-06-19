package models

import "time"

type Company struct {
	ID         int       `json:"id"`
	Name       string    `json:"name"`
	DateAdded  time.Time `json:"dateAdded"`
	PrimaryPOC string    `json:"primaryPOC"`
	Notes      []Note    `json:"notes"`
}
