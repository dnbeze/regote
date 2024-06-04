package models

import "time"

type Company struct {
	ID         int       `json:"id"`
	Name       string    `json:"name"`
	DateAdded  time.Time `json:"dateAdded"`
	PrimaryPOC string    `json:"primaryPOC"`
	Notes      []Note    `json:"notes"`
}

type Note struct {
	NoteId       int       `json:"noteid"`
	Title        string    `json:"title"`
	Body         string    `json:"body"`
	CreatedAt    time.Time `json:"-"`
	UpdatedField time.Time `json:"-"`
}
